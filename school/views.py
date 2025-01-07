from django.shortcuts import render, redirect
from .form import studentForm, teacherForm

# Create your views here.

def home(request):
    return render(request, 'school/home.html')  # Make sure the path is correct

def add_student(request):
   if request.method == 'POST':
      form = studentForm(request.POST)
      if form.is_valid():
         form.save()
         return redirect('home')
   else:
      form = studentForm()
   return render(request, 'add_student.html', {'form': form})
