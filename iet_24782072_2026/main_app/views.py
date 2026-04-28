from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.views import View
from django.urls import reverse_lazy
from .models import Report
from .forms import ReportForm
from django.contrib import messages


# HOME
def home(request):
    return render(request, 'main_app/home.html')


# ABOUT
def about(request):
    return render(request, 'about/about.html')


# CONTACT
def contacts(request):
    return render(request, 'contacts/contacts.html')


# DETAIL
class ReportDetailView(DetailView):
    model = Report
    template_name = 'main_app/report_detail.html'


# CREATE
class ReportCreateView(CreateView):
    model = Report
    form_class = ReportForm
    template_name = 'main_app/add_report.html'
    success_url = reverse_lazy('report_list')

    def form_valid(self, form):
        response = super().form_valid(form)
        messages.success(self.request, "Data berhasil ditambahkan!")
        return response
    
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_admin:
            messages.error(request, "Akses ditolak: Hanya administrator yang dapat menambahkan, memperbarui, atau menghapus laporan!!!")
            return redirect('report_list')
        return super().dispatch(request, *args, **kwargs)


# READ (LIST)
class ReportListView(ListView):
    model = Report
    template_name = 'main_app/report_list.html'
    context_object_name = 'reports'
    ordering = ['-created_at']

    def get_queryset(self):
        return Report.objects.all().order_by('-created_at')


# UPDATE
class ReportUpdateView(UpdateView):
    model = Report
    form_class = ReportForm
    template_name = 'main_app/update_report.html'
    success_url = reverse_lazy('report_list')

    def form_valid(self, form):
        response = super().form_valid(form)
        messages.success(self.request, "Data berhasil diperbarui!")
        return response
    
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_admin:
            messages.error(request, "Akses ditolak: Hanya administrator yang dapat menambahkan, memperbarui, atau menghapus laporan!!!")
            return redirect('report_list')
        return super().dispatch(request, *args, **kwargs)


# DELETE
class ReportDeleteView(DeleteView):
    model = Report
    template_name = 'main_app/delete_report.html'
    success_url = reverse_lazy('report_list')

    def post(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.delete()
        messages.success(request, "Data berhasil dihapus!")
        return redirect('report_list')
    
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_admin:
            messages.error(request, "Akses ditolak: Hanya administrator yang dapat menambahkan, memperbarui, atau menghapus laporan!!!")
            return redirect('report_list')
        return super().dispatch(request, *args, **kwargs)


# WORKFLOW STATUS
class ReportUpdateStatusView(View):
    def post(self, request, pk):
        if not request.user.is_authenticated or not request.user.is_admin:
            messages.error(request, "Akses ditolak: Hanya administrator yang dapat menambahkan, memperbarui, atau menghapus laporan!!!")
            return redirect('report_list')
        
        report = get_object_or_404(Report, pk=pk)
        new_status = request.POST.get('status')

        if report.status == 'REPORTED' and new_status == 'VERIFIED':
            report.status = 'VERIFIED'

        elif report.status == 'VERIFIED' and new_status == 'IN_PROGRESS':
            report.status = 'IN_PROGRESS'

        elif report.status == 'IN_PROGRESS' and new_status == 'RESOLVED':
            report.status = 'RESOLVED'

        report.save()
        messages.success(request, "Status berhasil diubah!")
        return redirect('report_list')