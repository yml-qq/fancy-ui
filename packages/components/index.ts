import { App } from "vue";
import EButton from "./button/src/button";

export { EButton };

export default {
  install(app: App): void{
    app.component(EButton.name, EButton)
  }
}
