from django.urls import path, include
from rest_framework.routers import DefaultRouter
from authapp.views import RegisterView

router = DefaultRouter()
router.register('register', RegisterView, basename='register')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/', include('authapp.urls')),
]
