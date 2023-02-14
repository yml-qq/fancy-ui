import { createApp } from "vue/dist/vue.esm-browser";

import LeavesUI from "../packages/components/index"

createApp({ template: `
<div style="margin-right: 18px; float: left">
  <fa-button>sdfsdf</fa-button>
</div>
<div style="margin-right: 18px; float: left">
 <fa-button type="primary">sdfsdf</fa-button>
</div>
<div style="margin-right: 18px; float: left">
  <fa-button type="success">sdfsdf</fa-button>
</div>
<div style="margin-right: 18px; float: left">
  <fa-button type="warning">sdfsdf</fa-button>
</div>
<div style="margin-right: 18px; float: left">
  <fa-button type="danger">sdfsdf</fa-button>
</div>
` })
  .use(LeavesUI).mount("#app")
