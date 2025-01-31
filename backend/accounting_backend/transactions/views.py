from django.utils import timezone
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.http import HttpResponse
import csv
from .models import Transaction
from .serializers import TransactionSerializer

def home(request):
    return HttpResponse("Bienvenue sur la page d'accueil de l'application de comptabilité.")

# View pour gérer les transactions
class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

# View pour générer la balance comptable
@api_view(['GET'])
def generate_balance(request, year):
    transactions = Transaction.objects.filter(date__year=year)
    categories = {}

    for transaction in transactions:
        if transaction.categorie not in categories:
            categories[transaction.categorie] = 0
        categories[transaction.categorie] += transaction.montant

    # Cela créer un fichier CSV
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = f'attachment; filename="balance_{year}.csv"'

    writer = csv.writer(response)
    writer.writerow(['Catégorie', 'Total'])
    for categorie, total in categories.items():
        writer.writerow([categorie, total])

    return response
