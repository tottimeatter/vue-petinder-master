import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// estilos
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import "./styles/styles.scss"; // estilos app

// firebase
import "./firebase";

import "./registerServiceWorker";

const app = createApp(App);
app.use(router);
app.mount("#app");
