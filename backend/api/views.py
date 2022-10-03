from .serializers import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView, CreateAPIView
from rest_framework import permissions, renderers, filters
from ..models import Note
from django.contrib.auth import get_user_model
UserModel = get_user_model()

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenPairSerializer

class StaffBrowsableMixin(object):
    def get_renderers(self):
        """
        Add Browsable API renderer if user is staff.
        """
        rends = self.renderer_classes
        if self.request.user and self.request.user.is_staff:
            rends.append(renderers.BrowsableAPIRenderer)
        return [renderer() for renderer in rends]

class NoteList(StaffBrowsableMixin, ListCreateAPIView):
    serializer_class = NoteSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['body',]
    def get_queryset(self):
        if(self.request.user.is_anonymous):
            return Note.objects.none()
        if(self.request.user.is_staff):
            return Note.objects.all().order_by('-updated')
        return Note.objects.filter(user=self.request.user.pk).order_by('-updated')

class NoteDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

class RegisterUser(CreateAPIView):
    model = UserModel
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer