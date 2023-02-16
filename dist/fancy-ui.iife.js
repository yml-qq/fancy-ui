var FancyUI = function(exports, vue) {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = ":root {\n  --default-color: #C9CDD4;\n  --primary-color: #165DFF;\n  --success-color: #00B42A;\n  --warning-color: #FF7D00;\n  --danger-color: #F53F3F;\n  --info-color: #86909C;\n  --default-color-lighter-1: #E5E6EB;\n  --primary-color-lighter-1: #4080FF;\n  --success-color-lighter-1: #23C343;\n  --warning-color-lighter-1: #FF9A2E;\n  --danger-color-lighter-1: #F76560;\n  --info-color-lighter-1: #A9AEB8;\n  --default-color-darker-1: #A9AEB8;\n  --primary-color-darker-1: #0E42D2;\n  --success-color-darker-1: #009A29;\n  --warning-color-darker-1: #D25F00;\n  --danger-color-darker-1: #CB272D;\n  --info-color-darker-1: #6B7785;\n  --primary-color-hover: #E5E6EB;\n  --default-radius: 2px;\n}\n\n:root {\n  --input-default-border-color: #E5E6EB;\n  --default-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n.fa-button {\n  display: inline-flex;\n  flex-wrap: wrap;\n  padding: 5px 18px;\n  margin: 0px 9px;\n  border-radius: var(--default-radius);\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.11s ease-in-out;\n}\n\n.fa-button:hover {\n  transform: translateY(-1px);\n}\n\n.fa-button.fa-button-default {\n  background-color: var(--default-color-lighter-1);\n}\n\n.fa-button.fa-button-default:hover {\n  background-color: var(--default-color);\n}\n\n.fa-button.fa-button-default:active {\n  background-color: var(--default-color-darker-1);\n}\n\n.fa-button.fa-button-primary {\n  color: #fff;\n  background-color: var(--primary-color);\n}\n\n.fa-button.fa-button-primary:hover {\n  background-color: var(--primary-color-lighter-1);\n}\n\n.fa-button.fa-button-primary:active {\n  background-color: var(--primary-color-darker-1);\n}\n\n.fa-button.fa-button-success {\n  color: #fff;\n  background-color: var(--success-color);\n}\n\n.fa-button.fa-button-success:hover {\n  background-color: var(--success-color-lighter-1);\n}\n\n.fa-button.fa-button-success:active {\n  background-color: var(--success-color-darker-1);\n}\n\n.fa-button.fa-button-warning {\n  color: #fff;\n  background-color: var(--warning-color);\n}\n\n.fa-button.fa-button-warning:hover {\n  background-color: var(--warning-color-lighter-1);\n}\n\n.fa-button.fa-button-warning:active {\n  background-color: var(--warning-color-darker-1);\n}\n\n.fa-button.fa-button-danger {\n  color: #fff;\n  background-color: var(--danger-color);\n}\n\n.fa-button.fa-button-danger:hover {\n  background-color: var(--danger-color-lighter-1);\n}\n\n.fa-button.fa-button-danger:active {\n  background-color: var(--danger-color-darker-1);\n}";
  document.head.appendChild(__vite_style__);
  const props = {
    type: {
      type: String,
      default: "default"
    }
  };
  const button = "";
  const EButton = /* @__PURE__ */ vue.defineComponent({
    name: "FaButton",
    props,
    setup(props2, {
      slots
    }) {
      return () => vue.createVNode("button", {
        "class": `fa-button fa-button-${props2.type}`
      }, [slots.default ? slots.default() : ""]);
    }
  });
  const index = {
    install(app) {
      app.component(EButton.name, EButton);
    }
  };
  exports.EButton = EButton;
  exports.default = index;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
//# sourceMappingURL=fancy-ui.iife.js.map
