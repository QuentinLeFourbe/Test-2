# Test2

Temps mit pour faire le projet:
13h-14h environ

Projet fait avec Vite js (https://vitejs.dev/) et styled components (https://styled-components.com/).

Pour lancer le projet:

## Installation

Pour installer les dépendances

```bash
 npm install
```

Pour lancer le client en local

```bash
 npm run watch-client
```

Pour lancer la fake API

```bash
 npm run json-server
```

Il faut lancer la fake API afin de pouvoir récupérer le profil utilisateur.

Un storybook est aussi à disposition via la commande

    ```bash
    npm run storybook
    ```

Les composants utilisant date-fns ne sont pas fonctionnels dans le Storybook à cause d'un bug lié à Vite js

## Prétentions

52K

## Autre

Je n'ai pas eu trop le temps de mettre en place la connexion avec une API via un token JWT, d'autant plus que j'ai pas saisi exactement l'attendu. Ce n'est pas forcément un sujet que je maîtrise encore bien, donc je sentais que j'allais perdre pas mal de temps à mocker.

J'ai déjà travaillé avec l'authorization code flow avec Keycloak, ou encore établis une connexion via Google avec Passport.js.
