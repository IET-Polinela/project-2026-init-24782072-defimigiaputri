from django.urls import path
from .views import (
    home, about, contacts,
    ReportListView, ReportDetailView,
    ReportCreateView, ReportUpdateView,
    ReportDeleteView, ReportUpdateStatusView,
    report_detail_api,
    search_reports,
)

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('contacts/', contacts, name='contacts'),
    path('reports/', ReportListView.as_view(), name='report_list'),
    path('report/<int:pk>/', ReportDetailView.as_view(), name='report_detail'),
    path('add/', ReportCreateView.as_view(), name='add_report'),
    path('update/<int:pk>/', ReportUpdateView.as_view(), name='update_report'),
    path('delete/<int:pk>/', ReportDeleteView.as_view(), name='delete_report'),
    path('update-status/<int:pk>/', ReportUpdateStatusView.as_view(), name='update_status'),

    path('report/<int:pk>/api/', report_detail_api, name='report_detail_api'),

path(
    "search/",
    search_reports,
    name="report_search"
),
]