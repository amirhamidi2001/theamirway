from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CategoryViewSet,
    TagViewSet,
    AuthorViewSet,
    PostViewSet,
    CommentViewSet,
)

app_name = "blog"

router = DefaultRouter()
router.register(r"categories", CategoryViewSet)
router.register(r"tags", TagViewSet)
router.register(r"authors", AuthorViewSet)
router.register(r"posts", PostViewSet)
router.register(r"comments", CommentViewSet)

urlpatterns = router.urls
