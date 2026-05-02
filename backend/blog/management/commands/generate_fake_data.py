from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.utils import timezone
from faker import Faker
import random
from blog.models import (
    Category,
    Tag,
    Author,
    Post,
    Comment,
)  # adjust import if your app name differs


class Command(BaseCommand):
    help = "Generate fake data for blog models"

    def handle(self, *args, **options):
        fake = Faker()
        Faker.seed(42)

        # ---------- Categories ----------
        self.stdout.write("Creating categories...")
        categories = []
        for _ in range(10):
            name = fake.unique.word().capitalize()
            categories.append(Category(name=name))
        Category.objects.bulk_create(categories, ignore_conflicts=True)
        categories = list(Category.objects.all())
        self.stdout.write(f"  -> {len(categories)} categories available")

        # ---------- Tags ----------
        self.stdout.write("Creating tags...")
        tags = []
        for _ in range(10):
            name = fake.unique.word().lower()
            tags.append(Tag(name=name))
        Tag.objects.bulk_create(tags, ignore_conflicts=True)
        tags = list(Tag.objects.all())
        self.stdout.write(f"  -> {len(tags)} tags available")

        # ---------- Authors ----------
        self.stdout.write("Creating authors...")
        authors = []
        for _ in range(2):
            user = User.objects.create_user(
                username=fake.unique.user_name(), email=fake.email(), password="pass123"
            )
            author = Author(
                user=user,
                name=fake.name(),
                role=fake.job(),
                bio=fake.text(max_nb_chars=500),
                email=fake.email(),
                website=fake.url() if random.choice([True, False]) else "",
            )
            authors.append(author)
        Author.objects.bulk_create(authors)
        authors = list(Author.objects.all())
        self.stdout.write(f"  -> {len(authors)} authors created")

        # ---------- Posts ----------
        self.stdout.write("Creating 100 posts...")
        if not categories or not authors:
            self.stdout.write(
                self.style.ERROR("ABORTING: No categories or authors found.")
            )
            return

        for i in range(100):
            title = fake.unique.sentence(nb_words=6)[:-1]  # remove trailing dot
            status = random.choice(["draft", "published"])
            published_date = timezone.make_aware(
                fake.date_time_between(start_date="-1y", end_date="now")
            )
            if status == "draft":
                published_date = timezone.now()  # drafts use current time

            post = Post(
                title=title,
                author=random.choice(authors),
                content="\n\n".join(fake.paragraphs(nb=random.randint(5, 15))),
                status=status,
                published_date=published_date,
                views=random.randint(0, 5000),
                likes=random.randint(0, 1000),
                allow_comments=random.choice([True, False]),
                meta_description=fake.sentence(nb_words=15),
                meta_keywords=", ".join(fake.words(nb=5)),
            )
            post.save()  # triggers slug, excerpt, reading_time

            # Assign random categories (1 to 3, but not more than available)
            num_cats = random.randint(1, min(3, len(categories)))
            post.categories.set(random.sample(categories, k=num_cats))

            # Assign random tags (0 to 5, but not more than available)
            if tags:
                num_tags = random.randint(0, min(5, len(tags)))
                if num_tags > 0:
                    post.tags.set(random.sample(tags, k=num_tags))
            else:
                self.stdout.write(
                    self.style.WARNING("  No tags available, skipping tag assignment.")
                )

            if (i + 1) % 20 == 0:
                self.stdout.write(f"  -> {i+1} posts created")

        self.stdout.write(f"  -> Total posts: {Post.objects.count()}")

        # ---------- Comments ----------
        self.stdout.write("Creating 200 comments (including replies)...")
        published_posts = list(Post.objects.filter(status="published"))
        if not published_posts:
            self.stdout.write(
                self.style.WARNING("No published posts found. Skipping comments.")
            )
            return

        all_comments = []
        # Top-level comments (~70%)
        top_level_count = 140
        for _ in range(top_level_count):
            post = random.choice(published_posts)
            comment = Comment(
                post=post,
                parent=None,
                name=fake.name(),
                email=fake.email(),
                website=fake.url() if random.choice([True, False]) else "",
                content=fake.paragraph(nb_sentences=random.randint(1, 5)),
                active=random.choice([True, False]),
                likes=random.randint(0, 50),
            )
            comment.save()
            all_comments.append(comment)

        # Replies (60)
        replies_needed = 60
        for _ in range(replies_needed):
            if not all_comments:
                break
            parent = random.choice(all_comments)
            reply = Comment(
                post=parent.post,
                parent=parent,
                name=fake.name(),
                email=fake.email(),
                website="",
                content=fake.sentence(),
                active=True,
                likes=random.randint(0, 30),
            )
            reply.save()
            all_comments.append(reply)

        self.stdout.write(f"  -> Total comments: {Comment.objects.count()}")
        self.stdout.write(self.style.SUCCESS("Fake data generation complete!"))
