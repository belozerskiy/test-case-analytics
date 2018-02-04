<template lang="pug">
  div
    h3(class="uk-card-title") Сводка
    table(class="uk-table uk-table-striped")
      thead
        tr
          th Дата 
          th Посещений
          th Регистраций
          th Доход
      tbody
        tr(v-for="item in data" :key="item.DATE" class="uk-text-center") 
          td {{ item.DATE }}
          td {{ item.LINK_VISITOR_COUNT }}
          td {{ item.REGISTRATION_COUNT }}
          td {{ item.PAYEMENT_VALUE | courency }}
      
</template>

<script>
import accounting from "accounting";

export default {
  props: ["data"],
  filters: {
    courency(value) {
      return accounting.formatMoney(value, {
        symbol: "₽",
        format: "%v %s"
      });
    }
  }
};
</script>

<style lang="scss">
th {
  color: black !important;
}
</style>
