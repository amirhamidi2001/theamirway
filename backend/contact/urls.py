from rest_framework.routers import DefaultRouter
from .views import ContactViewSet

app_name = "contact"

router = DefaultRouter()
router.register(r"", ContactViewSet)

urlpatterns = router.urls
