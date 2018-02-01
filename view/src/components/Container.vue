<template lang="pug">
div
  div(class="uk-section uk-section-primary uk-preserve-color uk-padding-remove-bottom")
    div(class="uk-container")
      div(class="uk-panel uk-light uk-margin-small")
        h3 Укажите ID пользователя и выберите дату
      div(class="uk-grid-match uk-child-width-expand@s" uk-grid)
        div
          div(class="uk-grid-match uk-child-width-expand@m" uk-grid)
            div 
              div(class="uk-card uk-card-default uk-card-body")
                app-input
            div 
              div(class="uk-card uk-card-default uk-card-body")
                appCalendar
  analyticContainer
</template>

<script>
import AppInput from "./AppInput.vue";
import AppCalendar from "./AppCalendar.vue";
import AppReport from "./AppReport.vue";
import AnalyticContainer from "./AnalyticContainer.vue";

export default {
  components: {
    appInput: AppInput,
    appCalendar: AppCalendar,
    appReport: AppReport,
    analyticContainer: AnalyticContainer
  }
};
</script>
