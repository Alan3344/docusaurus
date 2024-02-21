---
sidebar_position: 2
---

# Créer un document

Les documents sont des **groupes de pages** connectés via :

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Créez votre premier document

Créez un fichier Markdown dans `docs/hello.md` :

```md title="docs/hello.md"
# Hello

Ceci est mon **premier document Docusaurus** !
```

Un nouveau document est désormais disponible sur [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configurer la barre latérale

Docusaurus **crée automatiquement une barre latérale** à partir du dossier `docs`.

Ajoutez des métadonnées pour personnaliser l'étiquette et la position de la barre latérale :

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

Ceci est mon **premier document Docusaurus** !
```

Il est également possible de créer votre sidebar explicitement dans `sidebars.js` :

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
