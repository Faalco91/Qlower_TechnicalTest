from django.db import models

# Create your models here.

class Transaction(models.Model):
    CATEGORIES = [
        ('Ventes', 'Ventes'),
        ('Achats', 'Achats'),
        ('Salaires', 'Salaires'),
    ]
    date = models.DateTimeField()
    categorie = models.CharField(max_length=100, choices=CATEGORIES)
    montant = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.date} - {self.categorie} - {self.montant}"