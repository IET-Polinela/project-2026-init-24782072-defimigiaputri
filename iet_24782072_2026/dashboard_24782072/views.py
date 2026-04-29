from django.views.generic import TemplateView
from django.http import JsonResponse
from django.db.models import Count
from main_app.models import Report


class DashboardView(TemplateView):
    template_name = 'dashboard/dashboard.html'


def dashboard_stats(request):
    total = Report.objects.count()
    reported = Report.objects.filter(status='REPORTED').count()
    verified = Report.objects.filter(status='VERIFIED').count()
    in_progress = Report.objects.filter(status='IN_PROGRESS').count()
    resolved = Report.objects.filter(status='RESOLVED').count()

    data = {
        'total': total,
        'reported': reported,
        'verified': verified,
        'in_progress': in_progress,
        'resolved': resolved,
    }

    return JsonResponse(data)


def dashboard_data(request):
    status_data = (
        Report.objects
        .values('status')
        .annotate(total=Count('status'))
    )

    category_data = (
        Report.objects
        .values('category')
        .annotate(total=Count('category'))
    )

    return JsonResponse({
        'status': list(status_data),
        'category': list(category_data),
    })