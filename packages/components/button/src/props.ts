import type { Itype } from "./interface"
import { PropType } from "vue";

export const props = {
  type: {
    type: String as PropType<Itype>,
    default: "default"
  }
}

