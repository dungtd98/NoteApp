from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
UserModel = get_user_model()

class Note(models.Model):
    user = models.ForeignKey(UserModel, on_delete = models.CASCADE, blank=False, null=False, verbose_name = 'Người dùng')
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.body[:20]
    