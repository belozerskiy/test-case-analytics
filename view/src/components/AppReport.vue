<template lang="pug">
  div
    h3(class="uk-card-title") Сводка
    table(class="uk-table uk-table-striped")
      thead
        tr
          th Дата 
          th Посещённый
          th Регистраци
          th Доход
      tbody
        tr(v-for="item in data" :key="item.DATE" class="uk-text-center") 
          td {{ item.DATE }}
          td {{ item.LINK_VISITOR_COUNT }}
          td {{ item.REGISTRATION_COUNT }}
          td {{ item.DEPOSIT_VALUE }}
          
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss">
th {
  color: black !important;
}
</style>
