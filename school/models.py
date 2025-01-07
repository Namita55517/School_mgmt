from django.db import models

# Create your models here.
class student(models.Model):
   first_name = models.CharField(max_length=50)
   last_name = models.CharField(max_length=50)
   roll_no = models.IntegerField()
   class_namae = models.CharField(max_length=50)
   date_of_birth = models.CharField(max_length=50)
   
   def __str__(self):
       return f"{self.first_name} {self.last_name}" 
   
from django.db import models

class teacher(models.Model):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.BigIntegerField()
  


   