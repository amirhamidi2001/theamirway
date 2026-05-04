import threading
from django.core.mail import send_mail


def send_contact_acknowledgement_email(contact):
    """Send a synchronous acknowledgement email to a contact."""
    subject = "Thank you for contacting us"
    message = (
        f"Dear {contact.name},\n\n"
        "Your message has been sent. Thank you!\n"
        "We will check your message and respond to you soon.\n\n"
        "Best regards,\n"
        "The Team"
    )
    send_mail(subject, message, None, [contact.email], fail_silently=True)


def send_email_async(contact):
    """Asynchronously send an acknowledgement email to a contact using a new thread."""
    thr = threading.Thread(target=send_contact_acknowledgement_email, args=(contact,))
    thr.start()
