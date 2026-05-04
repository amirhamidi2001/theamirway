from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from unittest.mock import patch

from .models import Contact


class ContactAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.valid_payload = {
            "name": "John Doe",
            "email": "john@example.com",
            "subject": "Hello",
            "message": "This is a test message.",
        }

    @patch("contact.views.send_email_async")
    def test_create_contact_triggers_email(self, mock_send_email):
        """POST /contact/ should create a contact and call send_email_async."""
        response = self.client.post(reverse("contact:contact-list"), self.valid_payload)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Contact.objects.count(), 1)
        contact = Contact.objects.first()
        self.assertEqual(contact.name, "John Doe")
        mock_send_email.assert_called_once_with(contact)

    def test_list_contacts_paginated(self):
        """GET /contact/ should return paginated results."""
        for i in range(12):
            Contact.objects.create(
                name=f"User {i}",
                email=f"user{i}@example.com",
                subject="Test",
                message="Message",
            )
        response = self.client.get(reverse("contact:contact-list"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["total_items"], 12)
        self.assertEqual(response.data["total_pages"], 2)
        self.assertEqual(len(response.data["results"]), 10)

    def test_retrieve_single_contact(self):
        """GET /contact/{id}/ should return a single contact."""
        contact = Contact.objects.create(**self.valid_payload)
        url = reverse("contact:contact-detail", args=[contact.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["name"], contact.name)
        self.assertEqual(response.data["email"], contact.email)
