from rest_framework import serializers
from .models import Transaction

# Utilisation du Serializer pour le modèle Transaction, facilitant ainsi la conversion des objets Transaction
# en format JSON et inversement. Il prend en compte les champs id, date, categorie et montant dans l'API.

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'date', 'categorie', 'montant']
