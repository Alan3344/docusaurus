---
sidebar_position: 2
---

# Traduisez votre site

Traduisons `docs/intro.md` en français.

## Configurer i18n

Modifiez `docusaurus.config.js` pour ajouter la prise en charge de la locale `fr` :

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'fr', 'en'],
    localeConfigs: {
      zh: {
        label: '简体中文 (中国)',
        htmlLang: 'zh-CN',
      },
      fr: {
        label: 'Français',
        htmlLang: 'fr-FR',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    }
  },
};
```

## Traduire un document

Copiez le fichier `docs/intro.md` dans le dossier `i18n/fr` :

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Traduisez `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` en français.

## Démarrez votre site localisé

Démarrez votre site dans la langue française :

```bash
npm run start -- --locale fr
```

Votre site localisé est accessible sur [http://localhost:3000/fr/](http://localhost:3000/fr/) et la page `Getting Started` est traduite.

:::caution

En développement, vous ne pouvez utiliser qu’un seul paramètre régional à la fois.

:::

## Ajouter une liste déroulante de paramètres régionaux

Pour naviguer de manière transparente entre les langues, ajoutez une liste déroulante de paramètres régionaux.

Modifiez le fichier `docusaurus.config.js` :

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

La liste déroulante des paramètres régionaux apparaît désormais dans votre barre de navigation :

![Locale Dropdown](./img/localeDropdown.png)

## Créez votre site localisé

Créez votre site pour une région spécifique :

```bash
npm run build -- --locale fr
```

Ou créez votre site pour inclure tous les paramètres régionaux à la fois :

```bash
npm run build
```
