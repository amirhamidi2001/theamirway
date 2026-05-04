from rest_framework.viewsets import ModelViewSet

from .models import Contact
from .paginations import CustomPagination
from .serializers import ContactSerializer
from .utils import send_email_async


class ContactViewSet(ModelViewSet):
    """
    A simple ViewSet for listing or retrieving Contact.
    """

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    pagination_class = CustomPagination

    def perform_create(self, serializer):
        contact = serializer.save()
        send_email_async(contact)
