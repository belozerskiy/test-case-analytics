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
                  :handle="handlePartnerChange")
            div 
              div(class="uk-card uk-card-default uk-card-body")
                appCalendar(
                  :disabled="isPartnerSet"
                  @date-change="handleDateChange"
                )
  analyticContainer(:data="json.stats")
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
      selectedDate: null,
      partnerId: "",
      json: { stats: [] }
    };
  },
  computed: {
    isPartnerSet() {
      return this.partnerId != "";
    }
  },
  methods: {
    handlePartnerChange(event) {
      this.partnerId = event.target.value;
    },
    handleDateChange(date) {
      let from = date.start.toISOString().split("T")[0];
      let to = date.end.toISOString().split("T")[0];

      api
        .getStatisticByPeriod(this.partnerId, { from, to })
        .then(({ data }) => (this.json = data))
        .catch(({ message }) => console.log(message));
    }
  },
  watch: {
    selectedDate(newDate) {
      console.log(newDate);
    },
    partnerId(newPartnerId) {
      if (newPartnerId === "") {
        this.selectedDate = null;
        this.json = "";
      }
    }
  }
};
</script>
<style lang="scss">
#app {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: #1e87f0;
}
</style>
