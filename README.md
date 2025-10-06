# Projet Artiste React

Projet développé dans le cadre d’une **soutenance pour la validation d’une formation en développement front-end React**.

Ce site met en valeur le travail artistique d’un créateur à travers un portfolio, une présentation personnelle et un formulaire de contact.  
L’objectif est double : **valoriser une identité artistique** et **attirer de nouveaux clients ou collaborations**.


---


## Pages principales

| Page         | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `/home`      | Page d’accueil avec bibliographie, présentation du portfolio et une carrousel d’images                   |
| `/portfolio` | Galerie photos et vidéos avec possibilité de visualiser le contenu en plein écran                        |
| `/apropos`   | Réalisations, chiffres clés, expositions, formulaire et carte interactive                                |
| `/contact`   | Page contenant informations de contact détaillées, formulaire et carte interactive                       |



---


## Fonctionnalités

- **Bandeau de consentement aux cookies** affiché dès l'arrivée sur le site.
- **Carrousel d’images** en page d’accueil pour découvrir l’univers artistique.
- **Portfolio interactif** :
  - Données simulées via une **API locale** (fichiers JSON).
  - Visualisation des photos et vidéos en plein écran.
- **Formulaires de contact** disponibles sur la page Contact et dans la section À propos.
- **Navigation fluide et rapide** grâce au routage sans rechargement (SPA).
- **Design entièrement responsive**, adapté à tous les écrans (ordinateurs, tablettes, smartphones, jusqu'à 320px).


---


## Technologies utilisées

Ce projet est une **SPA (Single Page Application)** développée avec les technologies suivantes :

- **React 18** – Bibliothèque JavaScript pour construire l’interface utilisateur
- **Vite** – Outil de développement et de build ultra rapide
- **React Router DOM** – Navigation fluide entre les pages
- **CSS** – Styles modulaires par page et fichier `responsive.css` centralisé
- **Hooks personnalisés** – Gestion des formulaires, auto play et du scroll.
- **@testing-library/react** + **Vitest** – Tests unitaires des composants


---

## Responsive Design

Le site est entièrement responsive, offrant une expérience fluide et cohérente sur tous les supports : ordinateurs, tablettes et smartphones.
L’affichage s’adapte automatiquement à la taille de l’écran afin de garantir une navigation confortable, quelle que soit la résolution de l’appareil(jusqu'à 320px).

Le site a également été testé sur plusieurs navigateurs modernes (Chrome, Firefox, Safari) afin d’assurer une compatibilité et un rendu homogène sur l’ensemble des plateformes.

---

## Performances et optimisation

Le site a été analysé avec **Google Lighthouse**, l'outil d'audit de Google pour évaluer la qualité des applications web.

Les résultats obtenus sont **supérieurs aux seuils recommandés**, garantissant :

- **Performance** : site rapide et optimisé pour offrir une expérience fluide aux utilisateurs.
- **Accessibilité** : conforme aux bonnes pratiques pour être utilisable par tous, y compris les personnes en situation de handicap.
- **Bonnes pratiques** : respect des standards modernes de développement web.
- **SEO (référencement)** : optimisé pour une meilleure visibilité dans les moteurs de recherche.

> Ces analyses confirment que l'application répond aux exigences minimales fixées par Lighthouse pour une application web de qualité.


---


## Structure du projet

```
projet-artiste-react/
├─ public/
│  ├─ data/
│  ├─ images/
│  ├─ robots.txt
│  └─ site-favicon.ico
│
├─ src/
│  ├─ assets/               # Tous les fichiers CSS
│  │         
│  │
│  ├─ components/           # Composants réutilisables
│  │
│  ├─ constants/            # Constante globale (config, data statique)
│  │
│  ├─ hooks/                 # Hooks personnalisés (useXXX.js)
│  │
│  ├─ pages/                 # Pages principales (Home, Contact, etc.)
│  │
│  ├─ tests/                 # Fichiers de tests (Vitest/Jest)
│  │
│  ├─ App.jsx
│  └─ main.jsx
│
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ vercel.json               # Config déploiement Vercel
├─ README.md
└─ guide_utilisateur.txt
```


---


## Hooks personnalisés

- `useFormInput.js` : gestion des champs contrôlés
- `useAutoPlayWhenVisible.js` : autoplay vidéo sur scroll
- `useScrollToTopOnMount.js` : retour en haut automatique


---


## Tests unitaires

Tests écrits avec **Vitest + React Testing Library**  
Fichiers de test disponibles dans `src/tests`

Tests réalisés :
- Remplissage du formulaire (`MapEtFormulaire.test.jsx`)
- Animation de texte défilant (`ScrollingText.test.jsx`)
- Composant GallerySection (`GallerySection.test.jsx`)

Lancer les tests :
```bash
npm install
npm test
```

Des tests sur plusieurs navigateurs ont été réalisés aussi a savoir: firefox, safari, chrome.
---


## Déploiement

Le projet est déployé avec **Vercel**, une plateforme moderne pour héberger les applications React.

- **Déploiement continu :** à chaque mise à jour du code sur GitHub, Vercel reconstruit et publie automatiquement le site.
- **Code source :**  GitHub Repository (https://github.com/medfc/projet-artiste-react)
- **Site en ligne :**  deployé avec vercel (https://projet-artiste-react.vercel.app)


---


## Installation locale

```bash
git clone https://github.com/medfc/projet-artiste-react.git
cd projet-artiste-react
npm install
npm run dev
```

---


## Auteur

  Projet réalisé par ** Mohamed Guellil**  
  Dans le cadre d’une soutenance de formation de développeur front-end React.  
  Merci pour votre attention !
