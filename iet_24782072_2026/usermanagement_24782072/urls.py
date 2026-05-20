from django.urls import path
from django.shortcuts import redirect
from .views import UserLoginView, UserLogoutView
from .views import RegisterView
from .api_views import RegisterView

urlpatterns = [
    path('login/', UserLoginView.as_view(), name='login'),
    path('logout/', UserLogoutView.as_view(), name='logout'),
    path('register/', RegisterView.as_view(), name='register'),
    path('accounts/profile/', lambda request: redirect('report_list')),

    path(
        'register/',
        RegisterView.as_view(),
        name='register'
    ),

]