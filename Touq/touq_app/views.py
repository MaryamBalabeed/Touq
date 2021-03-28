from django.shortcuts import render , redirect
from .forms import *
from django.core.mail import send_mail, BadHeaderError , EmailMessage
from django.http import HttpResponse , HttpResponseRedirect
from touq import settings


# Create your views here.

def index(request):
    return render(request,'home.html' )


def home(request):
    return render(request,'home.html')


def emplyment(request):
    if request.method == 'POST':
        form = EmplymentForm(request.POST) #, request.FILES
        if form.is_valid():
            subject = "التوظيف"
            sender = form.cleaned_data['email']
            to='manalalghamdi0@gmail.com'
            body = {
			'full_name': form.cleaned_data['full_name'],  
			'email': form.cleaned_data['email'], 
            'phone_number': form.cleaned_data['phone_number'],
            # 'cv': request.FILES['cv'],
			'message':form.cleaned_data['message'], 
			}
            message = "\n".join(body.values())

            try:
                send_mail(subject, message, sender, [to])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect("success")
            
        
    else:
        form = EmplymentForm()
        return render(request, "emplyment.html", {'form':form})

def success(request):
    return render(request,'success.html')

    
def ourBusiness(request):
    return render(request,'ourBusiness.html')