---
sidebar_position: 2
---

# 翻译您的网站

让我们将 `docs/intro.md` 翻译成法语。

## 配置国际化

修改 `docusaurus.config.js` 以添加对 `fr` 语言环境的支持：

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

## 翻译文档

将 `docs/intro.md` 文件复制到 `i18n/fr` 文件夹：

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

将 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` 翻译为法语。

## 启动您的本地化网站

在法语语言环境中启动您的网站：

```bash
npm run start -- --locale fr
```

您的本地化站点可通过 [http://localhost:3000/fr/](http://localhost:3000/fr/) 访问，并且 `Getting Started` 页面已翻译。

:::caution

在开发过程中，您一次只能使用一种区域设置。

:::

## 添加区域设置下拉列表

要跨语言无缝导航，请添加区域设置下拉列表。

修改 `docusaurus.config.js` 文件：

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

区域设置下拉列表现在显示在您的导航栏中：

![Locale Dropdown](./img/localeDropdown.png)

## 构建您的本地化网站

为特定区域设置构建网站：

```bash
npm run build -- --locale fr
```

或者构建您的网站以同时包含所有区域设置：

```bash
npm run build
```
