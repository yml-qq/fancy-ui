import {demoBlockPlugin} from "vitepress-theme-demoblock";

const sidebar = {
  '/': [
    {
      text: '快速开始',
      link: '/guide/quickStart',
    },
    {
      text: '通用',
      link: '/',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
      ]
    }
  ]
}
const config = {
  title: "🔨  Fancy-UI",
  description: "探索简单而全的UI组件库",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    }
  }
}
export default config;
