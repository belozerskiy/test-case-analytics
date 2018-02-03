<template lang="pug">
  <vue-c3 :handler="handler"></vue-c3>
</template>

<script>
import Vue from "vue";
import VueC3 from "vue-c3";
import "../../node_modules/c3/c3.min.css";

export default {
  props: ["columns"],
  data() {
    return {
      handler: new Vue()
    };
  },
  components: {
    VueC3
  },
  mounted() {
    this.redraw();
  },
  methods: {
    redraw() {
      setTimeout(() => {
        this.options = {
          data: {
            x: "date",
            columns: this.columns,
            axes: {
              data2: "y2" // ADD
            }
          },
          axis: {
            x: {
              type: "timeseries",
              tick: {
                format: "%d"
              }
            },
            y: {
              label: {
                // ADD
                text: "Количество",
                position: "outer-middle"
              }
            },
            y2: {
              show: true,
              label: {
                text: "Доход",
                position: "outer-middle"
              }
            }
          }
        };
        this.handler.$emit("init", this.options);
      }, 1);
    }
  },
  watch: {
    columns(newColumns) {
      // this.options.data.columns = [
      //   ["date", "2017-11-11", "2018-12-11"],
      //   ...newColumns
      // ];
      // this.handler.$emit("init", this.options);
      this.redraw();
    }
  }
};
</script>

<style lang="scss">

</style>
