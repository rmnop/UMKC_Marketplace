from django.contrib import admin
from django.urls import path, include
from views import main, register, user_login

urlpatterns = [
    path('', main, name='main'), # Empty path for main page
    path('admin/', admin.site.urls),
    path('register/', register, name='register'),
    path('login/', user_login, name='login'),
    path('', include('UMKC_Marketplace.urls')),
]