# Generated by Django 3.1.7 on 2021-03-28 22:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('touq_app', '0005_remove_employment_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Employment',
        ),
    ]