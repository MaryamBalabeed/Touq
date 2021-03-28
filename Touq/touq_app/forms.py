from django import forms
from .models import User_Profile


class EmplymentForm(forms.Form):
	full_name = forms.CharField(label='الأسم', max_length = 50 ,required = True)
	email = forms.EmailField(label='الأيميل',max_length = 150 , required = True)
	phone_number = forms.CharField(label='رقم الجوال',max_length = 10 , required = True)
	# cv=forms.FileField(label='السيرة الذاتية' , widget = forms.FileInput, required = True)
	message = forms.CharField(label='الرسالة' ,widget = forms.Textarea, max_length = 2000)

