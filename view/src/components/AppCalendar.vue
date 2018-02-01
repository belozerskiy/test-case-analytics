<template lang="pug">
div(class="uk-grid-items-match" uk-grid)
    calendar-range(
      :events="calendarEvents" 
      :selection="calendarSelection"
      )
</template>

<script>
import { calendarRange } from "vue-calendar-picker";

export default {
  components: {
    calendarRange: calendarRange
  },
  data() {
    return {
      calendarEvents: [
        // periods
        {
          color: "#aaf",
          start: new Date(2016, 9, 5, 0, 0, 0, 0),
          end: new Date(2017, 4, 15, 0, 0, 0, 0)
        },
        {
          color: "#afa",
          start: new Date(2016, 9, 5, 0, 0, 0, 0),
          end: new Date(2017, 4, 13, 0, 0, 0, 0)
        },
        {
          color: "#faa",
          start: new Date(2017, 4, 8, 12, 30, 0, 0),
          end: new Date(2017, 4, 9, 6, 30, 0, 0)
        },
        // one-time
        {
          color: "#faa",
          start: new Date(2017, 4, 2, 0, 0, 0, 0),
          end: new Date(2017, 4, 2, 0, 0, 0, 0)
        },
        {
          color: "#aaa",
          start: new Date(2017, 4, 2, 0, 0, 0, 0),
          end: new Date(2017, 4, 2, 0, 0, 0, 0)
        }
      ],
      calendarSelection: {
        start: new Date(2017, 4, 2),
        end: new Date(2017, 4, 7, 12)
      }
    };
  }
};
</script>
