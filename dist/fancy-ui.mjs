import { defineComponent, createVNode } from "vue";
const props = {
  type: {
    type: String,
    default: "default"
  }
};
const button = "";
const EButton = /* @__PURE__ */ defineComponent({
  name: "FaButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `fa-button fa-button-${props2.type}`
    }, [slots.default ? slots.default() : ""]);
  }
});
const index = {
  install(app) {
    app.component(EButton.name, EButton);
  }
};
export {
  EButton,
  index as default
};
//# sourceMappingURL=fancy-ui.mjs.map
