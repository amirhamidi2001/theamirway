from django.contrib import admin
from .models import Category, Tag, Author, Post, Comment


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "author",
        "status",
        "published_date",
        "reading_time",
        "views",
    )
    list_filter = ("status", "published_date", "categories", "tags")
    search_fields = ("title", "content", "excerpt")
    prepopulated_fields = {"slug": ("title",)}
    filter_horizontal = ("categories", "tags")
    date_hierarchy = "published_date"
    actions = ["make_published"]

    def make_published(self, request, queryset):
        queryset.update(status="published")

    make_published.short_description = "Publish selected posts"


admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Author)
admin.site.register(Comment)
