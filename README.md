# 🎨 Projet Artiste React

Projet développé dans le cadre d’une **soutenance pour la validation d’une formation en développement front-end React**.

Ce site met en valeur le travail artistique d’un créateur à travers un portfolio, une présentation personnelle et un formulaire de contact. L’objectif est double : **valoriser une identité artistique** et **attirer de nouveaux clients ou collaborations**.

---

## 🚀 Fonctionnalités

- **Page d’accueil** avec carrousel d’images
- **Section Portfolio** dynamique avec galerie responsive
- **Formulaire de contact** contrôlé avec gestion d’état (`custom hook`)
- **Animations fidèles au design original HTML/CSS**
- **Design responsive** jusqu’à 320px (smartphones)
- **Code structuré** avec composants réutilisables
- **Tests unitaires** pour les composants clés (`formulaire`, `texte défilant`, `galerie`)
- **Hooks personnalisés** pour la gestion du scroll, du slider ou des champs contrôlés

---



## 📁 Structure du projet

```
projet-artiste-react/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── data/
│   ├── hooks/  
│   ├── pages/             // Home, Contact, Portfolio, Apropos
│   ├── tests/   
│   ├── main.jsx  
│   └── App.jsx
├── index.html  
├── package-lock.json
├── package.json
├── vite.config.js
├── guide_utilisateur.txt
└── README.md
```


---

## 🛠️ Technologies utilisées

- **React 18** – Bibliothèque JavaScript utilisée pour construire l’interface utilisateur
- **Vite** – Outil de développement rapide pour les projets React
- **React Router DOM** – Pour la navigation entre les pages (Home, Contact, Portfolio, À propos)
- **CSS** – Feuilles de style modulaires par page + fichier `responsive.css` centralisé
- **Hooks personnalisés** – Pour le formulaire contrôlé, le carrousel d’images, etc.
- **@testing-library/react** + **Vitest** – Pour les tests unitaires des composants


---



## 📷 Pages principales

| Page            | Description                                        |
|--------------   |----------------------------------------------------|
| `/home`         | Présente l’univers artistique avec un carrousel    |
| `/portfolio`    | Galerie des réalisations artistiques               |
| `/contact`      | Formulaire de contact interactif                   |
| `/apropos`      | Informations sur l’artiste                         |

---



## 🧪 Tests unitaires

Tests écrits avec **Vitest + React Testing Library**  
Fichiers de test disponibles dans `src/tests`

Tests réalisés :
- ✅ Remplissage du formulaire (`MapEtFormulaire.test.jsx`)
- ✅ Animation de texte défilant (`ScrollingText.test.jsx`)
- ✅ Galerie d’images dynamique (`GallerySection.test.jsx`)

Lancer les tests :
```bash
npm install
npm test
```

---

## 🧠 Hooks personnalisés

- `useFormInput.js` : gestion des champs contrôlés
- `useAutoPlayWhenVisible.js` : autoplay vidéo sur scroll
- `useImageSlider.js` : carrousel maison
- `useScrollPosition.js` : effet sticky navbar
- `useScrollToTopOnMount.js` : retour en haut automatique

---

## 🔧 Déploiement *(à faire après création GitHub + GitHub Pages)*

Le projet pourra être déployé via GitHub Pages.

➡️ **Lien à venir** : `[ajouter ici le lien GitHub Pages une fois publié]`

Si besoin :
```js
// vite.config.js
export default defineConfig({
  base: '/nom-du-repo/',
  ...
})
```

---

## 📦 Installation locale

```bash
git clone https://github.com/votre-utilisateur/projet-artiste-react.git
cd projet-artiste-react
npm install
npm run dev
```

---

## 🙋‍♂️ Auteur

Projet réalisé par ** Mohamed Guellil**  
Dans le cadre d’une soutenance de formation de développeur front-end React.  
✨ Merci pour votre attention !
