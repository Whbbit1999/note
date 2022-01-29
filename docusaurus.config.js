// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Whbbit 月空人笔记",
  tagline: "不放过任何一个细节，记录成长的每一步",
  url: "https://note.whbbit.cn",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "whbbit-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          blogSidebarTitle: "全部博文",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      announcementBar: {
        id: "support_us",
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
      navbar: {
        // hideOnScroll: true,

        title: "Whbbit Notes",
        logo: {
          alt: "月空人笔记",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "学习笔记",
            position: "right",
            items: [
              { label: "markdown", to: "docs/markdown/start" },
              { label: "js", to: "docs/js/start" },
            ],
          },
          {
            label: "资源路径",
            position: "right",
            to: "/resource",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "源码",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "学习笔记",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "视频频道",
        //     items: [
        //       {
        //         label: "哔哩哔哩",
        //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //       },
        //       {
        //         label: "西瓜视频/今日头条",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //       {
        //         label: "YouTube",
        //         href: "https://twitter.com/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "友情链接",
        //     items: [
        //       {
        //         label: "月空人主页",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //       {
        //         label: "月空人博客平台",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //       // {
        //       //   label: "GitHub主页",
        //       //   href: "https://github.com/facebook/docusaurus",
        //       // },
        //     ],
        //   },
        // ],
        copyright: `
        Copyright © 2021 - ${new Date().getFullYear()} Whbbit Built with Docusaurus.<br>
        <a href="https://beian.miit.gov.cn/" target="_blank">晋ICP备2020011938号-1</a>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
