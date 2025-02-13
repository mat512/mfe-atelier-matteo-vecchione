# Projet React avec Federation Provider

Ce projet est un exemple de mise en œuvre de `Module Federation` avec React. Il se compose de deux parties :

1. **header-mfe** : Microfrontend fournissant un composant `Header`.
2. **shell** : Application principale intégrant le microfrontend.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

-   [Node.js](https://nodejs.org/) (version recommandée : 16+)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation et Démarrage

### 1. Démarrer le microfrontend (`header-mfe`)

```sh
cd header-mfe
npm install
npm run dev
```

### 2. Démarrer l'application principale (`shell`)

```sh
cd shell
npm install
npm run dev
```

## Accès à l'application

Une fois les deux services démarrés, accédez à l'URL fournie par `shell` dans le terminal (généralement `http://localhost:2000`).

