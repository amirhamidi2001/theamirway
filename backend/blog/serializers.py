from rest_framework import serializers
from .models import Category, Tag, Author, Post, Comment


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug", "created_at"]
        read_only_fields = ["slug", "created_at"]


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name", "slug"]
        read_only_fields = ["slug"]


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = [
            "id",
            "name",
            "role",
            "bio",
            "image",
            "email",
            "website",
            "created_at",
        ]
        read_only_fields = ["created_at"]


class CommentSerializer(serializers.ModelSerializer):
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = [
            "id",
            "post",
            "parent",
            "name",
            "email",
            "website",
            "content",
            "created_at",
            "updated_at",
            "active",
            "likes",
            "replies",
        ]
        read_only_fields = ["created_at", "updated_at", "likes"]

    def get_replies(self, obj):
        if hasattr(obj, "_prefetched_replies"):
            replies = obj._prefetched_replies
        else:
            replies = obj.replies.filter(active=True)
        return CommentSerializer(replies, many=True, context=self.context).data


class PostReadSerializer(serializers.ModelSerializer):
    """Used for GET (list/retrieve) – shows nested category and tag details."""

    categories = CategorySerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    author = AuthorSerializer(read_only=True)
    comments_count = serializers.ReadOnlyField()
    reading_time_str = serializers.ReadOnlyField()

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "slug",
            "author",
            "categories",
            "tags",
            "featured_image",
            "content",
            "excerpt",
            "reading_time",
            "views",
            "likes",
            "status",
            "published_date",
            "created_at",
            "updated_at",
            "allow_comments",
            "meta_description",
            "meta_keywords",
            "comments_count",
            "reading_time_str",
        ]
        read_only_fields = fields  # all read-only for read serializer


class PostWriteSerializer(serializers.ModelSerializer):
    """Used for POST/PUT/PATCH – uses primary keys for relations."""

    categories = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), many=True
    )
    tags = serializers.PrimaryKeyRelatedField(
        queryset=Tag.objects.all(), many=True, required=False
    )
    author = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all())

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "slug",
            "author",
            "categories",
            "tags",
            "featured_image",
            "content",
            "excerpt",
            "status",
            "published_date",
            "allow_comments",
            "meta_description",
            "meta_keywords",
        ]
        read_only_fields = [
            "slug",
            "views",
            "likes",
            "created_at",
            "updated_at",
            "reading_time",
            "comments_count",
            "reading_time_str",
        ]

    def validate_featured_image(self, value):
        return value
