from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import CustomTokenObtainPairView, NoteList, NoteDetail, RegisterUser


urlpatterns = [
   
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('notes/', NoteList.as_view(), name='note_list'),
    path('note/<int:pk>/', NoteDetail.as_view(), name='note_detail'),

    path('register/', RegisterUser.as_view(), name='register_user')
   
]   