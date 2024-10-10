# Serveur Retro

Ce serveur est conçu pour fonctionner avec une base de données Supabase. Il utilise Express pour gérer les routes et les requêtes HTTP.

## Configuration

Assurez-vous d'avoir un fichier `.env` à la racine du projet avec les clés suivantes :

- `PORT` : le port sur lequel le serveur écoutera les requêtes. Par défaut, il est configuré sur 3000.
- `DATABASE_URL` : l'URL de votre base de données Supabase.
- `DATABASE_KEY` : la clé d'accès à votre base de données Supabase.

## Lancement du serveur

Pour lancer le serveur, exécutez la commande suivante :

```bash
npm start
```

## Tester l'API

Voici les URL pour tester l'API :

- `GET /companies` : Récupère la liste des entreprises.
- `POST /companies` : Ajoute une nouvelle entreprise.
- `DELETE /companies/:id` : Supprime une entreprise.

- `GET /users` : Récupère la liste des utilisateurs.
- `POST /users` : Ajoute un nouvel utilisateur.
- `DELETE /users/:id` : Supprime un utilisateur.

- `GET /admins` : Récupère la liste des administrateurs.
- `POST /admins` : Ajoute un nouvel administrateur.
- `DELETE /admins/:id` : Supprime un administrateur.

- `GET /job_advertisements` : Récupère la liste des offres d'emploi.
- `POST /job_advertisements` : Ajoute une nouvelle offre d'emploi.
- `DELETE /job_advertisements/:id` : Supprime une offre d'emploi.

## Comprendre l'API

L'API est conçue pour gérer les entreprises, les utilisateurs, les administrateurs et les offres d'emploi. Chaque entité a ses propres routes pour les opérations CRUD (Create, Read, Update, Delete).
