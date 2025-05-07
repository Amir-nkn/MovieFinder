# 🎬 MovieFinder

---

## Informations générales

- **Collège :** Collège de Maisonneuve
- **Nom du projet :** MovieFinder
- **Nom de l’étudiant :** Amir
- **Cours :** 582-41F-MA TECHNIQUES AVANCÉES EN PROGRAMMATION WEB (Groupe 23621)
- **Enseignant :** Marcos Sanches
- **Date de remise :** 06 mai 2025

---

## Liste complète des commandes utilisées

### 1. Initialiser un nouveau projet Node.js

```bash
npm init -y
```

### 2. Installer les bibliothèques nécessaires

```bash
npm install express
npm install request
npm install dotenv
```

### 3. Installer nodemon

```bash
npm install --save-dev nodemon
```

### 4. Ajouter dans `package.json`

```json
"scripts": {
  "start": "nodemon index.js"
}
```

### 5. Créer un fichier `.env`

```
API_KEY=28cfc9bc
PORT=3000
```

### 6. Créer la structure du projet

```bash
mkdir public
touch index.js config.js .env
touch public/index.html public/script.js
```

### 7. Lancer dans le navigateur

```text
http://localhost:3000/fetch/Havoc
http://localhost:3000/view?t=Havoc
```

---

## Description du projet

Le projet **MovieFinder** est une application web développée avec **Node.js** et **Express**.  
Elle permet à l'utilisateur de rechercher un film via l’API publique **OMDb**.  
Les données récupérées sont sauvegardées localement dans un fichier `.json`,  
et affichées dynamiquement dans une interface stylisée avec **Tailwind CSS**.  
La clé API est sécurisée à l’aide d’un fichier `.env`.

---

## Instructions d’installation et d’exécution

### 1. Cloner le dépôt GitHub (ou télécharger le dossier)

```bash
git clone https://github.com/ton-utilisateur/moviefinder.git
cd moviefinder
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Créer un fichier `.env` avec vos infos :

```
API_KEY=VotreCleOMDb
PORT=3000
```

### 4. Lancer le serveur

```bash
npm start
```

### 5. Accéder à l'application :

```
http://localhost:3000/fetch/NomDuFilm
http://localhost:3000/view?t=NomDuFilm
```

---

### 6. Github :

```
https://github.com/Amir-nkn/movieFinder
```

_Projet réalisé dans le cadre du cours de programmation web avancée avec Marcos Sanches._
