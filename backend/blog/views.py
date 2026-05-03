from django.db.models import Prefetch
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.viewsets import ModelViewSet

from .models import Author, Category, Comment, Post, Tag
from .paginations import CustomPagination
from .permissions import IsOwnerOrReadOnly
from .serializers import (
    AuthorSerializer,
    CategorySerializer,
    CommentSerializer,
    PostReadSerializer,
    PostWriteSerializer,
    TagSerializer,
)


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class TagViewSet(ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class AuthorViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class PostViewSet(ModelViewSet):
    """
    Class-level queryset – required by router and used as base for filtering
    """

    queryset = Post.objects.filter(status="published")
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ["categories", "author", "tags", "status"]
    search_fields = ["title", "content"]
    ordering_fields = ["published_date"]
    pagination_class = CustomPagination
    lookup_field = "slug"

    def get_queryset(self):
        """
        Enhance base queryset with select_related/prefetch_related for performance
        """
        return self.queryset.select_related("author").prefetch_related(
            "categories", "tags", "comments"
        )

    def get_serializer_class(self):
        """
        Use different serializers for read vs write operations
        """
        if self.action in ["create", "update", "partial_update"]:
            return PostWriteSerializer
        return PostReadSerializer


class CommentViewSet(ModelViewSet):
    """
    Class-level queryset – only active comments
    """

    queryset = Comment.objects.filter(active=True)
    serializer_class = CommentSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["post", "parent"]

    def get_queryset(self):
        qs = self.queryset.select_related("post", "parent")
        """ 
        Prefetch replies to avoid N+1 queries when serializing 
        """
        qs = qs.prefetch_related(
            Prefetch("replies", queryset=Comment.objects.filter(active=True))
        )
        post_id = self.request.query_params.get("post")
        if post_id:
            """
            When filtering by post, return only top‑level comments (no parent)
            """
            qs = qs.filter(post_id=post_id, parent__isnull=True)
        return qs
