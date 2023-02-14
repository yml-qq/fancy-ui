import { defineComponent } from "vue";

export default defineComponent({
  name: "EButton",
  setup(props,{slots}) {
    return () => <button>
      {slots.default ? slots.default() : ""}
    </button>
  }
})
