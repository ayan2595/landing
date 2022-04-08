import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCloudArrowDown,
  faUser,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCloudArrowDown, faUser, faCircleCheck);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
