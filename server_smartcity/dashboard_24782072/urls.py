from django.urls import path
from .views import DashboardView, dashboard_stats, dashboard_data

urlpatterns = [
    path('', DashboardView.as_view(), name='dashboard'),
    path('stats/', dashboard_stats, name='dashboard_stats'),   # basic
    path('data/', dashboard_data, name='dashboard_data'),      # advanced
]