import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Field Training Documentation',
  tagline: 'Police Training Management System Guide',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://orhanbiler.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/field-training-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'orhanbiler', // Usually your GitHub org/user name.
  projectName: 'field-training-next', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Mermaid support
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Link to the GitHub repository
          editUrl:
            'https://github.com/orhanbiler/field-training-next/tree/main/',
        },
        blog: false, // Disable blog functionality
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Field Training Docs',
      logo: {
        alt: 'Field Training Logo',
        src: 'logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/orhanbiler/field-training-next',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Field Training Logo',
        src: 'logo.png',
        href: 'https://fieldtraining.cheverlypd.com',
        width: 160,
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Authentication System',
              to: '/docs/01_authentication___user_management_',
            },
            {
              label: 'Report Management',
              to: '/docs/02_training_report_system_',
            },
            {
              label: 'Authorization System',
              to: '/docs/01_authentication___authorization_system_',
            },
          ],
        },
        {
          title: 'Field Training App',
          items: [
            {
              label: 'Field Training System',
              href: 'https://fieldtraining.cheverlypd.com',
            },
            {
              label: 'Source Code',
              href: 'https://github.com/orhanbiler/field-training-next',
            },
          ],
        },
        {
          title: 'Cheverly Police Department',
          items: [
            {
              label: 'Department Hub',
              href: 'https://cheverlypd.com',
            },
            {
              label: 'All Applications',
              href: 'https://cheverlypd.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cheverly Police Department. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
