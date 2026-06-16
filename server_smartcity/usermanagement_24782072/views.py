from django.contrib.auth.views import LoginView
from django.contrib.auth import logout
from django.views import View
from django.contrib import messages
from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import RegisterForm
from django.shortcuts import redirect

class RegisterView(CreateView):
    form_class = RegisterForm
    template_name = 'register.html'
    success_url = reverse_lazy('login')

    def form_valid(self, form):

        user = form.save(commit=False)

        user.is_admin = False
        user.is_member = True

        user.save()

        messages.success(
            self.request,
            "Registrasi berhasil, silakan login"
        )

        return redirect("login")
    

class UserLoginView(LoginView):
    template_name = 'login.html'

    def get_success_url(self):
        return reverse_lazy('home')

    def form_valid(self, form):
        messages.success(self.request, "Login berhasil")
        return super().form_valid(form)

class UserLogoutView(View):
    def post(self, request):
        logout(request)
        messages.success(request, "Logout berhasil")
        return redirect('login')