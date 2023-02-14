import DefaultTheme from 'vitepress/theme';
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
// @ts-ignore
import { useComponents } from "./useComponents";
import FancyUI from "../../../packages/components"

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    ctx.app.use(FancyUI)
  }
}
