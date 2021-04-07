from django.urls import path
from . import views
from touq import settings

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('emplyment/', views.emplyment, name='emplyment'), 
    path('success/', views.success, name='success'),  
    path('ourBusiness/', views.ourBusiness, name='ourBusiness'),    
]

