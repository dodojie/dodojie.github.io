// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HL810PRO',
  tagline: '一款能满足你所有想象的网关',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dodojie.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'zh',
  //   locales: ['zh', 'en'],
  //   path: 'i18n',
  //   localeConfigs: {
  //     zh: {
  //       label: '中文',
  //       direction: 'ltr',
  //       htmlLang: 'zh-CN',
  //       calendar: 'gregory',
  //       path: 'zh',
  //     },
  //     en: {
  //       label: 'English',
  //       direction: 'ltr',
  //       htmlLang: 'en-US',
  //       calendar: 'persian',
  //       path: 'en',
  //     },
  //   },
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HERLON',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   position: 'left',
          //   docId: 'intro',
          //   label: '前言',
          // },
          {to: '/docs/intro', label: '前言', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'guides',
            position: 'left',
            label: '使用指南',
          },
          {to: 'https://www.zigbee2mqtt.io/supported-devices/', label: '支持设备', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'dropdown',
          //   label: '更多',
          //   position: 'left',
          //   items: [
          //     {
          //       type: 'doc',
          //       label: 'homeassistant',
          //       docId: 'other/hass/intro',
          //     },
          //     {
          //       type: 'doc',
          //       label: 'zigbee2mqtt',
          //       docId: 'other/z2m/intro',
          //     },
          //   ],
          // },
          {
            href: 'https://github.com/dodojie/HL810PRO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '联系交流',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: '加入QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=BrUCR4mt',
              },
            ],
          },
          {
            title: '相关官网',
            items: [
              {
                label: 'homeassistant',
                href: 'https://www.home-assistant.io/',
              },
              {
                label: 'zigbee2mqtt',
                href: 'https://www.zigbee2mqtt.io/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HERLON, Inc. Built by Dodojie.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
