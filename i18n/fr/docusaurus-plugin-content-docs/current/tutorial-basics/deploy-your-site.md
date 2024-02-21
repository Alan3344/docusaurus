---
sidebar_position: 5
---

# Déployez votre site

Docusaurus est un **générateur de site statique** (également appelé **[Jamstack](https://jamstack.org/)**).

Il construit votre site sous forme de simples **fichiers statiques HTML, JavaScript et CSS**.

## Construisez votre site

Créez votre site **pour la production** :

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `build`.

## Déployez votre site

Testez votre version de production localement :

```bash
npm run serve
```

Le dossier `build` est désormais servi sur [http://localhost:3000/](http://localhost:3000/).

Vous pouvez désormais déployer le dossier `build` **presque n'importe où **facilement, **gratuitement** ou à très faible coût (lisez le **[Guide de déploiement](https://docusaurus.io/docs/deployment)**).
