# Generated by Django 5.1.5 on 2025-01-31 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('categorie', models.CharField(choices=[('Ventes', 'Ventes'), ('Achats', 'Achats'), ('Salaires', 'Salaires')], max_length=100)),
                ('montant', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]
