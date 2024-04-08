// @ts-check
// `@type` JSDoc 注释允许编辑器自动完成和类型检查
//（与“@ts-check”配对时）。
// 有多种等效方法来声明 Docusaurus 配置。
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const ProjectName = 'docusaurus' // BASE_URL='/docusaurus/' npx docusaurus serve
const BASE_URL = process.env.BASE_URL || `/${ProjectName}/`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: BASE_URL + 'img/favicon.ico',

  // 在此设置您网站的生产 URL
  url: 'https://alan3344.github.io',
  // 设置为您的站点提供服务的 /<baseUrl>/路径名
  // 对于 GitHub 页面部署，通常是 '/<projectName>/' /docusaurus/
  // ~$ BASE_URL='/' npx docusaurus serve
  baseUrl: BASE_URL,

  //GitHub 页面部署配置。
  //如果您不使用 GitHub 页面，则不需要这些。
  organizationName: 'Alan3344', // 通常是您的 GitHub 组织/用户名。
  projectName: ProjectName, // 通常是您的存储库名称。

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  //即使不使用国际化，也可以使用该字段来设置
  //有用的元数据，如 html lang。例如，如果您的网站是中文的，您
  //可能想用“zh-Hans”替换“en”。
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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 请将其更改为您的存储库。
          // 删除此项即可删除“编辑此页面”链接。
          editUrl:
            'https://github.com/Alan3344/docusaurus/tree/zh-CN',
        },
        blog: {
          showReadingTime: true,
          // 请将其更改为您的存储库。
          // 删除此项即可删除“编辑此页面”链接。
          editUrl:
            'https://github.com/Alan3344/docusaurus/tree/zh-CN/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为您项目的社交卡片图像
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '我的站点',
        logo: {
          alt: '我的站点 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'Facebook\'s GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/Alan3344/docusaurus/tree/zh-CN',
            label: 'Author\'s GitHub',
            position: 'right',
          },
        ],
      },
      // 网站底部的链接部分
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Alan3344/docusaurus/tree/zh-CN',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} My Project, Inc. 使用 Docusaurus 构建。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
