# Agence de voyage (symfony-next)

## Contexte du projet 

Ce projet est un site pour une agence de voyage fictive, utilisant React et Next.js pour la partie front-end, et Symfony pour la partie back-end. Le site est déployé sur Vercel.

Le cahier des charges stipulait que l'utilisateur pourrait :

- Voir l'ensemble des voyages proposés par l'agence
- Réserver un voyage
- Voir les contacts de l'agence et envoyer un message

En back-office, l'utilisateur pourra en fonction de son rôle :

- Voir les réservations et contacts
- Ajouter/modifier/supprimer des réservations et demandes
- Ajouter/modifier/supprimer des voyages

L'API du back-end devait pouvoir renvoyer les informations de la base de données et communiquer avec le front-end exclusivement en JSON.

## Mise en place du projet

Commencez par cloner le projet : 
```shell
git clone git@github.com:BasileDM/agence-voyage-symfony-next.git
```

### Configuration back-end
Dans le dossier 'back-end', il est nécessaire de créer un fichier .env.local avec la ligne suivante, et remplacer les valeurs 'dbuser', 'dbpassword', '127.0.0.1', '3306' et '8.2.0'  par les vôtres.

```php
DATABASE_URL="mysql://dbuser:dbpassword@127.0.0.1:3306/monprojet?serverVersion=8.2.0&charset=utf8mb4"
```

### Configuration front-end
Dans le dossier 'front-end', il faut modifier le fichier config.js contenu dans 'brief7-front-end/src/js/config.js' et modifier la valeur de 'API_URL' par votre adresse d'API.

```javascript
export const API_URL = "http://localhost:8000/api/
```

À la racine du projet back-end si vous utilisez un server Nginx ajoutez la ligne suivant dans le fichier .conf :

```conf
location /votre_nom/nom_du_projet/ {
  add_header Access-Control-Allow-Origin https://votreurl.com;
```

## Versions et prérequis
- MySQL Server version: 8.2.0
- PHP 8.3+
- Node 21.7.1
- React 18.3
- Next 14.2.3
- Tailwind CSS 3.4.1 https://tailwindcss.com/docs/installation
- Tailgrids 2.2.0 https://tailgrids.com/docs/getting-started
- Symfony 7 https://symfony.com/doc/current/setup.html

## Routes API
- /api/trips (GET) : pour la liste de tous les voyages
- /api/trip/Trip name (GET) : Pour les détails d'un voyage
- /api/destinations (GET) : Pour la liste des destinations
- /api/categories (GET) : Pour la liste des catégories
- /api/reservation/new (POST) : Pour soumettre une nouvelle réservation
- /api/contact/new (POST) : Pour soumettre une demande de contact 

## Utilisateur par défaut
- admin@admin.com pour un utilisateur de type administrateur
- user@user.com pour un utilisateur de type éditeur
- Pass : 1234

## Fichiers utiles 
Le fichier MCD avec son schéma se trouvent dans le dossier Ressources
