<template lang="pug">
div
  div(class="uk-section uk-section-primary uk-preserve-color uk-padding-remove-bottom")
    div(class="uk-container")
      div(class="uk-panel uk-light uk-margin-small")
        h3 Статистика
      div(class="uk-grid-match uk-child-width-expand@s" uk-grid)
        div
          div(class="uk-grid-match uk-child-width-expand@m" uk-grid)
            div 
              div(class="uk-card uk-card-default uk-card-body")
                appReport
            div 
              div(class="uk-card uk-card-default uk-card-body")
                appChart
</template>


<script>
import AppReport from "./AppReport.vue";
import AppChart from "./AppChart.vue";

export default {
  components: {
    appReport: AppReport,
    appChart: AppChart
  }
};
</script>
