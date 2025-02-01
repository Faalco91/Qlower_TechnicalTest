from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet, generate_balance, home


# Créer un routeur pour gérer les vues des transactions
router = DefaultRouter()
router.register(r'transactions', TransactionViewSet)

# Permet de définir les URL patterns spécifiques à l'application transactions
urlpatterns = [
    path('', include(router.urls)),  # Inclue toutes les routes pour les transactions
    path('balance-comptable/<int:year>/', generate_balance, name='generate_balance'),
]
