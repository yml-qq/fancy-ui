import { demoBlockPlugin } from "vitepress-theme-demoblock";
import sidebar from "./sidebar";

const config = {
  title: "🔨  Fancy-UI", // tab页title
  description: "探索简单而全的UI组件库", // 说明
  themeConfig: {
    // 首页配置
    sidebar,
    logo: "/public/logo.svg", // 首页配置logo
    siteTitle: "Fancy-UI",
    socialLinks: [{ icon: "github", link: "https://github.com/yml-qq/fancy-ui" }], // 社交链接
    footer: {
      message: "声明",
      copyright: "本文档暂供个人使用"
    }
  },
  markdown: {
    config: md => {
      md.use(demoBlockPlugin);
    }
  }
};
export default config;
