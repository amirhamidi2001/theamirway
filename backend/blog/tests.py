import tempfile
from io import BytesIO
from django.test import override_settings
from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.urls import reverse
from django.utils import timezone
from PIL import Image

from blog.models import Category, Tag, Author, Post, Comment


def get_image_file(name="test.jpg", ext="jpeg", size=(1, 1)):
    """Generate a valid image file for testing."""
    file_obj = BytesIO()
    image = Image.new("RGB", size, color="red")
    image.save(file_obj, ext)
    file_obj.seek(0)
    return SimpleUploadedFile(name, file_obj.getvalue(), content_type="image/jpeg")


@override_settings(MEDIA_ROOT=tempfile.gettempdir())
class BlogAPITestCase(APITestCase):
    """Base test case with common setup and helper methods."""

    def setUp(self):
        self.user = User.objects.create_user(username="testuser", password="testpass")
        self.client = APIClient()

        self.author = Author.objects.create(
            name="Test Author",
            role="Contributor",
            bio="Test bio",
            email="author@example.com",
            website="https://example.com",
        )

        self.category = Category.objects.create(name="Tech", slug="tech")
        self.tag = Tag.objects.create(name="Django", slug="django")

        self.published_post = Post.objects.create(
            title="Test Published Post",
            slug="test-published-post",
            author=self.author,
            content="This is the post content. It has enough words to calculate reading time.",
            status="published",
            published_date=timezone.now(),
            featured_image=get_image_file("featured.jpg"),
        )
        self.published_post.categories.add(self.category)
        self.published_post.tags.add(self.tag)

        self.draft_post = Post.objects.create(
            title="Test Draft Post",
            slug="test-draft-post",
            author=self.author,
            content="Draft content",
            status="draft",
            published_date=timezone.now(),
            featured_image=get_image_file("draft_featured.jpg"),
        )

        self.comment = Comment.objects.create(
            post=self.published_post,
            name="Commenter",
            email="commenter@example.com",
            content="Great post!",
            active=True,
        )
        self.reply = Comment.objects.create(
            post=self.published_post,
            parent=self.comment,
            name="Replier",
            email="reply@example.com",
            content="Thanks!",
            active=True,
        )

    def authenticate(self):
        self.client.force_authenticate(user=self.user)

    def unauthenticate(self):
        self.client.force_authenticate(user=None)


class CategoryViewSetTests(BlogAPITestCase):
    def test_list_categories(self):
        url = reverse("blog:category-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], "Tech")

    def test_create_category_authenticated(self):
        self.authenticate()
        url = reverse("blog:category-list")
        data = {"name": "Health", "slug": "health"}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Category.objects.count(), 2)
        self.assertEqual(response.data["slug"], "health")

    def test_create_category_unauthenticated(self):
        url = reverse("blog:category-list")
        data = {"name": "Health", "slug": "health"}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_retrieve_category(self):
        url = reverse("blog:category-detail", args=[self.category.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "Tech")

    def test_update_category(self):
        self.authenticate()
        url = reverse("blog:category-detail", args=[self.category.id])
        data = {"name": "Technology", "slug": "technology"}
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.category.refresh_from_db()
        self.assertEqual(self.category.name, "Technology")

    def test_delete_category(self):
        self.authenticate()
        url = reverse("blog:category-detail", args=[self.category.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Category.objects.count(), 0)


class TagViewSetTests(BlogAPITestCase):
    def test_list_tags(self):
        url = reverse("blog:tag-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], "Django")

    def test_create_tag(self):
        self.authenticate()
        url = reverse("blog:tag-list")
        data = {"name": "REST", "slug": "rest"}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Tag.objects.count(), 2)
        self.assertEqual(response.data["slug"], "rest")


class AuthorViewSetTests(BlogAPITestCase):
    def test_list_authors(self):
        url = reverse("blog:author-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_create_author(self):
        self.authenticate()
        url = reverse("blog:author-list")
        data = {
            "name": "New Author",
            "role": "Admin",
            "bio": "Biography",
            "email": "new@example.com",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Author.objects.count(), 2)


class PostViewSetTests(BlogAPITestCase):
    """
    Current behavior:
    - Unauthenticated GET → 200, only published posts, paginated results.
    """

    def test_list_posts_unauthenticated(self):
        """Unauthenticated users can list only published posts."""
        url = reverse("blog:post-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["results"]), 1)
        self.assertEqual(response.data["results"][0]["title"], "Test Published Post")

    def test_filter_posts_by_category(self):
        url = reverse("blog:post-list")
        response = self.client.get(url, {"categories": self.category.id})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["results"]), 1)

    def test_filter_posts_by_author(self):
        url = reverse("blog:post-list")
        response = self.client.get(url, {"author": self.author.id})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data["results"]), 1)

    def test_search_posts(self):
        url = reverse("blog:post-list")
        response = self.client.get(url, {"search": "Published"})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["results"][0]["title"], "Test Published Post")

    def test_ordering_posts(self):
        newer_post = Post.objects.create(
            title="Newer Post",
            slug="newer-post",
            author=self.author,
            content="Newer content",
            status="published",
            published_date=timezone.now() + timezone.timedelta(days=1),
            featured_image=get_image_file("newer.jpg"),
        )
        url = reverse("blog:post-list")
        response = self.client.get(url, {"ordering": "-published_date"})
        results = response.data["results"]
        self.assertEqual(results[0]["title"], "Newer Post")
        self.assertEqual(results[1]["title"], "Test Published Post")

    def test_pagination(self):
        for i in range(12):
            Post.objects.create(
                title=f"Post {i}",
                slug=f"post-{i}",
                author=self.author,
                content=f"Content {i}",
                status="published",
                featured_image=get_image_file(f"img{i}.jpg"),
            )
        url = reverse("blog:post-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("total_pages", response.data)
        self.assertEqual(len(response.data["results"]), 10)  # default page_size

        response = self.client.get(url, {"page_size": 5})
        self.assertEqual(len(response.data["results"]), 5)

    def test_retrieve_published_post(self):
        url = reverse("blog:post-detail", args=[self.published_post.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], "Test Published Post")
        self.assertIn("comments_count", response.data)

    def test_retrieve_draft_post_not_found(self):
        """Draft posts are excluded from the default queryset."""
        url = reverse("blog:post-detail", args=[self.draft_post.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_create_post_unauthenticated(self):
        url = reverse("blog:post-list")
        data = {
            "title": "New Post",
            "author": self.author.id,
            "categories": [self.category.id],
            "content": "Content",
            "status": "published",
            "featured_image": get_image_file("test.jpg"),
        }
        response = self.client.post(url, data, format="multipart")
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_create_post_authenticated(self):
        self.authenticate()
        url = reverse("blog:post-list")
        data = {
            "title": "Authenticated Post",
            "author": self.author.id,
            "categories": [self.category.id],
            "tags": [self.tag.id],
            "content": "This is the content of the new post. It should generate excerpt and reading time.",
            "status": "draft",
            "featured_image": get_image_file("test.jpg"),
        }
        response = self.client.post(url, data, format="multipart")
        if response.status_code != 201:
            print("Create post errors:", response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        post = Post.objects.get(slug="authenticated-post")
        self.assertEqual(post.title, "Authenticated Post")
        self.assertTrue(post.excerpt)  # auto-generated
        self.assertGreater(post.reading_time, 0)

    def test_update_post_unauthenticated(self):
        url = reverse("blog:post-detail", args=[self.published_post.id])
        data = {"title": "Hacked"}
        response = self.client.patch(url, data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_update_post_authenticated_owner_missing(self):
        """
        Since Author has no user relation, IsOwnerOrReadOnly cannot verify ownership.
        Returns 403 because obj.author.user does not exist.
        If you add Author.user OneToOneField, this should become 200.
        """
        self.authenticate()
        url = reverse("blog:post-detail", args=[self.published_post.id])
        data = {"title": "Updated by Authenticated User"}
        response = self.client.patch(url, data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_delete_post_authenticated(self):
        self.authenticate()
        url = reverse("blog:post-detail", args=[self.published_post.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class CommentViewSetTests(BlogAPITestCase):
    """
    Current behavior:
    - Listing comments returns all active comments (including replies) unless 'post' query param is given.
    """

    def test_list_comments_all_active(self):
        url = reverse("blog:comment-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Both comment and its reply are active and returned
        self.assertEqual(len(response.data), 2)

    def test_filter_comments_by_post_top_level(self):
        url = reverse("blog:comment-list")
        response = self.client.get(url, {"post": self.published_post.id})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Only top-level comments (parent__isnull=True) for that post
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["id"], self.comment.id)

    def test_comment_serializer_includes_replies(self):
        url = reverse("blog:comment-detail", args=[self.comment.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("replies", response.data)
        self.assertEqual(len(response.data["replies"]), 1)
        self.assertEqual(response.data["replies"][0]["content"], "Thanks!")

    def test_create_comment(self):
        url = reverse("blog:comment-list")
        data = {
            "post": self.published_post.id,
            "name": "New Commenter",
            "email": "new@example.com",
            "content": "New comment.",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Comment.objects.count(), 3)

    def test_create_reply(self):
        url = reverse("blog:comment-list")
        data = {
            "post": self.published_post.id,
            "parent": self.comment.id,
            "name": "Replier",
            "email": "reply@example.com",
            "content": "Reply content",
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        reply = Comment.objects.last()
        self.assertEqual(reply.parent, self.comment)

    def test_delete_comment_cascades(self):
        url = reverse("blog:comment-detail", args=[self.comment.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Comment.objects.count(), 0)
