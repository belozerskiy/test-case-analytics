<template>
  <v-date-picker :mode='mode' v-model='selectedDate' ></v-date-picker>
</template>

<script>
export default {
  data() {
    return {
      mode: "range",
      selectedDate: null
    };
  },
  methods: {
    dateFormatter(date) {
      return date.toISODate();
    }
  },
  watch: {
    selectedDate(newDate, oldDate) {
      let date = newDate.start.toISOString();
      date = date.split("T")[0];
      console.log(date);
    }
  }
};
</script>
