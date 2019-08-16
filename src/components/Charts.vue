<template>
  <div id="container-charts">charts</div>
</template>

<script>
import { mapState } from "vuex";
import Highcharts from "highcharts";

export default {
  name: "Charts",
  computed: mapState({
    list: state => state.list
  }),
  watch: {
    list() {
      this.dataShource();
    }
  },
  methods: {
    dataShource() {
      const hours_quantity = this.list.hours_quantity;
      this.setUp(hours_quantity);
    },

    setUp(hours_quantity) {
      /* eslint-disable no-console */
      console.log(hours_quantity);

      Highcharts.chart("container-charts", {
        chart: {
          type: "line"
        },
        title: {
          text: "Monthly Average Temperature"
        },
        subtitle: {
          text: "Source: WorldClimate.com"
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        },
        yAxis: {
          title: {
            text: "Temperature (°C)"
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },
        series: [
          {
            name: "Tokyo",
            data: hours_quantity.quantity
          },
          {
            name: "London",
            data: hours_quantity.hours
          }
        ]
      });

      /* eslint-disable no-console */
      console.log("aaaa");
    }
  }
};
</script>

<style>
</style>