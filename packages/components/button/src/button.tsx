import { defineComponent } from "vue";
import { props } from "./props";
import "../../../theme/src/button.scss";

export default defineComponent({
  name: "FaButton",
  props,
  setup(props, { slots }) {
    return () => <button class={`fa-button fa-button-${props.type}`}>{slots.default ? slots.default() : ""}</button>;
  }
});
