<template>
  <v-date-picker v-show="disabled" :mode='mode' v-model='selectedDate' ></v-date-picker>
</template>

<script>
export default {
  props: ["disabled"],
  data() {
    return {
      mode: "range",
      selectedDate: null
    };
  },
  watch: {
    selectedDate(date) {
      console.log(date.start, date.end);
      date.start.setHours(0, -date.start.getTimezoneOffset(), 0, 0);
      date.end.setHours(0, -date.end.getTimezoneOffset(), 0, 0);
      this.$emit("date-change", date);
    }
  }
};
</script>
