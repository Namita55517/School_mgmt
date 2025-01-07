from django.contrib import admin
from .models import student, teacher
from django.shortcuts import render

# Register your models here.
def home(request):
    Students = student.objects.all()
    Teachers = teacher.objects.all()
    return render (request, 'home.html', {'Students': Students, 'Teachers': Teachers})