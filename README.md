# DealLabs-Like
# 🧭 ROADMAP MERN — Projet “DealLabs-like” (Version Simplifiée)
# 🧠 PHASE 1 — Conception & Analyse fonctionnelle
# 1.1 Définir les rôles et fonctionnalités
👥 Rôles : visiteur, membre, admin

🎯 Fonctionnalités :

Consulter la liste des deals

Détail d’un deal (description, image, lien)

Ajout d’un deal par un membre

Système de vote (like/dislike ou Hot/Cold)

Authentification (inscription, connexion, profil)

(Facultatif) : commentaires, signalement, admin modération

# 1.2 Maquettes Figma simplifiées (≈ 5 écrans)
Accueil (liste de deals)

Connexion / Inscription

Page “Ajouter un deal”

Détail d’un deal

Page profil

# 1.3 Modélisation des données (MongoDB)
User: username, email, hashedPassword, role

Deal: title, description, price, imageURL, postedBy, votes, timestamps

(Optionnels) : Comment, Vote si tu modularises

https://www.drawdb.app/editor?shareId=dea0f698f32c3e43c8dd7215574343b6
# ⚙️ PHASE 2 — Environnement & Préparation
# 2.1 Initialisation des projets
Création du monorepo ou deux dossiers client/ et server/

npm init des deux côtés

Setup de base :

Backend : Node.js + Express

Frontend : React (CRA ou Vite)

# 2.2 Configuration de travail
ESLint + Prettier

.env pour les variables

Création du repo Git (branche main unique)

# 📦 PHASE 3 — Back-End (Express + MongoDB via Mongoose)
# 3.1 Structure du projet
Dossiers : routes, controllers, models, middleware, config

Fichier d’entrée : server.js ou index.js

# 3.2 Authentification
🔐 Inscription : création user + hashage password (bcrypt)

🔐 Connexion : vérif + génération JWT

✅ Token stocké côté frontend en localStorage

#3.3 API REST
Deals : CRUD (Create, Read, Update, Delete)

Auth : /register, /login, /me

Auth middleware pour protéger les routes

Vérification de l’auteur pour les modifications

# 3.4 Connexion à MongoDB
MongoDB Atlas ou local

Mongoose pour définir les modèles

# 🧑‍🎨 PHASE 4 — Front-End (React)
# 4.1 Structure du projet React
Arborescence claire : components/, pages/, services/, context/

Mise en place de React Router

# 4.2 Pages à implémenter
🔸 Accueil (liste des deals)

🔸 Détail d’un deal

🔸 Ajouter un deal (formulaire + auth)

🔸 Connexion / Inscription

🔸 Profil utilisateur (deals postés, option logout)

# 4.3 Intégration avec l’API
Utilisation de Axios

Stockage du JWT dans localStorage

Appel avec le token dans l’en-tête Authorization: Bearer

Redirections selon l’état de connexion

# 4.4 UI & UX
Framework CSS recommandé : Tailwind ou autre

Responsive design minimum

Composants réutilisables : Navbar, DealCard, Loader, Alert

# 🔐 PHASE 5 — Sécurité & Permissions
# 5.1 Authentification client
AuthContext (ou Redux) pour gérer l’état connecté

Vérification du token au chargement de l’app

Redirection automatique si l’utilisateur est non authentifié

# 5.2 Permissions de base
Rôle admin protégé côté front et back

Bouton “Supprimer” ou “Modifier” affiché uniquement à l’auteur du deal

Middleware pour protéger les routes back
