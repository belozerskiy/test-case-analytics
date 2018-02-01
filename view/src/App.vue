<template lang="pug">
div(id="app")
  div(class="uk-section uk-section-primary uk-preserve-color uk-padding-remove-bottom")
    div(class="uk-container")
      div(class="uk-panel uk-light uk-margin-small")
        h3 Укажите ID пользователя и выберите дату
      div(class="uk-grid-match uk-child-width-expand@s" uk-grid)
        div
          div(class="uk-grid-match uk-child-width-expand@m" uk-grid)
            div 
              div(class="uk-card uk-card-default uk-card-body")
                app-input(
                  :input="partnerId" 
                  :handle="handleChange")
            div 
              div(class="uk-card uk-card-default uk-card-body")
                appCalendar(
                  :inputValue="range"
                  :handle="updateValue"
                )
                p {{}}
  analyticContainer
</template>

<script>
import AppInput from "./components/AppInput";
import AppCalendar from "./components/AppCalendar";
import AppReport from "./components/AppReport";
import AnalyticContainer from "./components/AnalyticContainer";

import * as api from "./api";

export default {
  components: {
    appInput: AppInput,
    appCalendar: AppCalendar,
    appReport: AppReport,
    analyticContainer: AnalyticContainer
  },
  data() {
    return {
      partnerId: "",
      range: ""
    };
  },
  methods: {
    handleChange(event) {
      this.partnerId = event.target.value;
    },
    updateValue(range) {
      this.range = event.target.value;
      console.log(range);
    }
  }
};
</script>
