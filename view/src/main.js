import Vue from "vue";
import App from "./App.vue";

// UIKit framework CSS and JS files
import "../node_modules/uikit/dist/css/uikt.css";
import "../node_modules/uikit/dist/js/uikit.js";
import "../node_modules/uikit/dist/js/uikit-icons.js";

new Vue({
  el: "#app",
  render: h => h(App)
});
