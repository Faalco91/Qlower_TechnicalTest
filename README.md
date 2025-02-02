# Qlower_TechnicalTest

Ce projet est une application de gestion de transactions comptables permettant de créer, visualiser des transactions et générer des balances comptables au format CSV.

## Structure du Projet

```
Qlower_TechnicalTest/
├── backend/             # API Django
├── frontend/             # Application React
└── README.md
```

## Technologies Utilisées

### Frontend
- [Vite](https://vitejs.dev/) - Outil de build rapide pour le développement
- [React](https://reactjs.org/) - Framework JavaScript
- [Material-UI (MUI)](https://mui.com/) - Framework de composants UI
- [React-Icons](https://react-icons.github.io/react-icons/) - Bibliothèque d'icônes

### Backend
- [Django](https://www.djangoproject.com/) - Framework web Python
- [Django REST Framework](https://www.django-rest-framework.org/) - API REST toolkit
- [PostgreSQL](https://www.postgresql.org/) - Base de données relationnelle

## Prérequis

- Python 3.8+
- Node.js 14+
- PostgreSQL 12+

## Installation

### Backend

1. Créer un environnement virtuel Python :
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Linux/MacOS
# ou
.\venv\Scripts\activate  # Windows
```

2. Installer les dépendances :
```bash
cd backend
pip install -r requirements.txt
```

3. Configurer la base de données :
```bash
cd accounting_backend
python manage.py migrate
```

4. Lancer le serveur :
```bash
python manage.py runserver
```

### Frontend

1. Installer les dépendances :
```bash
cd frontend
npm install
```

2. Lancer l'application :
```bash
npm run dev
```

## API Endpoints

- `POST /api/transactions/` - Créer une nouvelle transaction
- `GET /api/transactions/` - Récupérer toutes les transactions
- `GET /api/balance-comptable/{année}/` - Générer la balance comptable en CSV

## Fonctionnalités

### Frontend
- Formulaire de création de transaction avec :
  - Date picker
  - Sélection de catégorie (Ventes, Achats, Salaires)
  - Montant
- Liste des transactions
- Génération de balance comptable par année

### Backend
- API REST pour la gestion des transactions
- Génération de fichiers CSV pour les balances comptables
- Stockage des données dans PostgreSQL

## Format du fichier CSV

Le fichier de balance comptable généré suit le format suivant (exemple) :
```csv 
Catégorie,Total
Ventes,1200.00
Achats,-400.00
Salaires,-500.00
```

## Fichier requirements.txt

```
# pip install -r requirements.txt

asgiref==3.8.1
blinker==1.9.0
click==8.1.8
Django==5.1.5
django-cors-headers==4.6.0
djangorestframework==3.15.2
Flask==3.1.0
Flask-Cors==5.0.0
iniconfig==2.0.0
itsdangerous==2.2.0
Jinja2==3.1.5
MarkupSafe==3.0.2
packaging==24.2
pluggy==1.5.0
psycopg2==2.9.10
pytest==8.3.4
pytest-django==4.9.0
sqlparse==0.5.3
Werkzeug==3.1.3
```

### Dépendances principales
- **Django** - Framework web Python
- **Django REST Framework** - Pour créer l'API REST
- **django-cors-headers** - Gestion des CORS pour l'API
- **psycopg2** - Adaptateur PostgreSQL pour Python
- **Flask** - Framework web léger (utilisé pour des fonctionnalités spécifiques)

### Dépendances de test
- **pytest** - Framework de test
- **pytest-django** - Plugin pytest pour Django

