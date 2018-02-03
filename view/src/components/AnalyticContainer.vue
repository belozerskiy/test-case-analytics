<template lang="pug">
div
  div(class="uk-section uk-section-primary uk-preserve-color uk-padding-remove-bottom")
    div(class="uk-container")
      div(class="uk-panel uk-light uk-margin-small")
        h2(class="uk-text-bold uk-text-center") Статистика
        div(class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid)
            div 
                div(class="uk-card uk-card-body uk-card-default")
                    appReport(:data="data")
            div
                div(class="uk-card uk-card-body uk-card-default")
                    appChart(:columns="columns")
</template>


<script>
import AppReport from "./AppReport.vue";
import AppChart from "./AppChart.vue";

export default {
  props: ["data"],
  computed: {
    columns() {
      let arr = [["date"], ["LINK_VISITOR"], ["REGISTRATION"]];
      this.data.forEach(el => {
        arr[0].push(el.DATE);
        arr[1].push(el.LINK_VISITOR_COUNT);
        arr[2].push(el.REGISTRATION_COUNT);
      });
      return arr;
    }
  },
  components: {
    appReport: AppReport,
    appChart: AppChart
  }
};
</script>
