# Generated by Django 5.1.4 on 2025-01-06 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0002_alter_teacher_email_alter_teacher_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teacher',
            name='phone',
            field=models.BigIntegerField(),
        ),
    ]
