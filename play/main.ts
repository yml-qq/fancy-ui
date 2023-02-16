import { createApp } from "vue/dist/vue.esm-browser";

import LeavesUI from "../packages/components/index";

createApp({
  template: `
<div style="margin-right: 18px; float: left">
  <fa-button>默认</fa-button>
</div>
<div style="margin-right: 18px; float: left">
 <fa-button type="primary">主题</fa-button>
</div>
<div style="margin-right: 18px; float: left">
  <fa-button type="success">成功</fa-button>
</div> 
<div style="margin-right: 18px; float: left">
  <fa-button type="warning">警告</fa-button>
</div>
<div style="margin-right: 18px; float: left">
  <fa-button type="danger">危险</fa-button>
</div>
`
})
  .use(LeavesUI)
  .mount("#app");
