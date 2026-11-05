import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { seoPlugin } from "@vuepress/plugin-seo";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import sidebar from "./sidebar.json" with { type: "json" };

const hostname = "https://api-table.io.nexus";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "api-table",
  description: "api-table 使用文档：无需编写 SQL 的表级增删改查接口、查询条件与导出",
  shouldPrefetch: false,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  markdown: { lineNumbers: true },
  bundler: viteBundler(),
  plugins: [
    searchProPlugin({ indexContent: true }),
    seoPlugin({ hostname, author: { name: "Tong Li", url: "https://github.com/litongjava" } }),
    sitemapPlugin({ hostname }),
  ],
  theme: defaultTheme({
    logo: "/logo.png",
    repo: "litongjava/api-table-docs",
    docsRepo: "https://github.com/litongjava/api-table-docs",
    docsBranch: "main",
    docsDir: "docs",
    navbar: [
      { text: "源码", link: "https://github.com/litongjava/api-table" },
      { text: "Tio Boot", link: "https://tio-boot.com/" },
    ],
    sidebar,
  }),
});
