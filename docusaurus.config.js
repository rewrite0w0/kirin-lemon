// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'rewrite0w0',
  tagline: '코딩은 읽기 쉽도록, 동료와는 우상향 추구하는 JavaScript 개발자',
  url: 'https://rewrite0w0.github.io',
  baseUrl: '/kirin-lemon/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rw.ico',
  organizationName: 'rewrite0w0', // Usually your GitHub org/user name.
  projectName: 'kirin-lemon', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/rw.svg',
        },
        items: [
          {
            to: 'https://rewrite0w0.github.io/La-viva-es-Sueno/blog',
            label: '블로그',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'light',

        copyright: `Copyright © ${new Date().getFullYear()} rewrite0w0, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
