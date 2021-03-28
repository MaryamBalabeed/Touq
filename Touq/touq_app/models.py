from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Employment(models.Model):
    userName = models.CharField(max_length=50)
    userEmail = models.CharField(max_length=50)
    userDescription = models.TextField()
 
    def __str__(self):
        return self.userName

class User_Profile(models.Model):
    fname = models.CharField(max_length=200)
    lname = models.CharField(max_length = 200)
    technologies = models.CharField(max_length=500)
    email = models.EmailField(default = None)
    display_picture = models.FileField()
    def __str__(self):
        return self.fname