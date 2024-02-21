---
sidebar_position: 1
---

# Gérer les versions de Docs

Docusaurus peut gérer plusieurs versions de vos documents.

## Créer une version de documentation

Sortez une version 1.0 de votre projet :

```bash
npm run docusaurus docs:version 1.0
```

Le dossier `docs` est copié dans `versioned_docs/version-1.0` et `versions.json` est créé.

Vos documents ont désormais 2 versions :

- `1.0` sur `http://localhost:3000/docs/` pour la documentation de la version 1.0
- `current` sur `http://localhost:3000/docs/next/` pour les **documents inédits à venir**

## Ajouter une liste déroulante de versions

Pour naviguer de manière transparente entre les versions, ajoutez une liste déroulante de versions.

Modifiez le fichier `docusaurus.config.js` :

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

La liste déroulante des versions de la documentation apparaît dans votre barre de navigation :

![Déroulante des versions de documents](./img/docsVersionDropdown.png)

## Mettre à jour une version existante

Z

- `versioned_docs/version-1.0/hello.md` mises à jour `http://localhost:3000/docs/hello`
- `docs/hello.md` mises à jour `http://localhost:3000/docs/next/hello`
