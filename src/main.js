import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";

import { MotionPlugin } from "@vueuse/motion";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons";
import VTooltip from "v-tooltip";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(MotionPlugin).use(VTooltip);

app.mount("#app");
