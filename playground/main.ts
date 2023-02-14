import { createApp } from "vue/dist/vue.esm-browser";

import LeavesUI from "../packages/components/index"

createApp({ template: `<EButton>sdfsdf</EButton>` })
  .use(LeavesUI).mount("#app")
