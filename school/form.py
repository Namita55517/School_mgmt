from django import forms
from .models import student, teacher

class studentForm(forms.ModelForm):
    class Meta:
        model = student
        fields = '__all__'
        
class teacherForm(forms.ModelForm):
   class Meta:
      model = teacher
      fields = '__all__'