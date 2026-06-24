from django.views.generic import TemplateView
from django.http import JsonResponse
from django.db.models import Count
from main_app.models import Report


from django.contrib import messages
from django.views.generic import TemplateView


class DashboardView(TemplateView):

    template_name = 'dashboard/dashboard.html'

    def get_context_data(
        self,
        **kwargs
    ):

        context = super().get_context_data(
            **kwargs
        )

        context['is_dashboard_allowed'] = (
            self.request.user.is_authenticated
            and
            self.request.user.is_admin
        )

        if not context['is_dashboard_allowed']:

            messages.warning(
                self.request,
                "Dashboard hanya dapat diakses administrator."
            )

        return context


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

    latest_reported = list(
        Report.objects.filter(status='REPORTED')
        .order_by('-created_at')[:5]
        .values('title', 'location', 'created_at')
    )

    latest_resolved = list(
        Report.objects.filter(status='RESOLVED')
        .order_by('-created_at')[:5]
        .values('title', 'location', 'created_at')
    )

    return JsonResponse({
        'status': list(status_data),
        'category': list(category_data),
        'latest_reported': latest_reported,
        'latest_resolved': latest_resolved,
    })