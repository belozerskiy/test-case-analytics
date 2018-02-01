import Vue from "vue";
import App from "./App.vue";

// UIKit framework CSS and JS files
import "../node_modules/uikit/dist/css/uikit.css";
import "../node_modules/uikit/dist/js/uikit.js";

import "../node_modules/uikit/dist/js/uikit-icons.js";
import "../node_modules/uikit/dist/js/uikit-icons.min.js";

// Chartkick.js
import Chartkick from "chartkick";
import VueChartkick from "vue-chartkick";
import Highcharts from "highcharts";

window.Highcharts = Highcharts;
Vue.use(VueChartkick, { Chartkick });

// VCalendar
import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";

// Buefy dependency for VCalendar
import Buefy from "buefy";
import "buefy/lib/buefy.css";
Vue.use(Buefy);

// Access v-calendar, v-date-packer and v-popover components
Vue.use(VCalendar);

new Vue({
  el: "#app",
  render: h => h(App)
});
