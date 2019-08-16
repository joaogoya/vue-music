<template>
  <div>
    <div class="row">
      <div class="col-sm-12 bg-white">
        <div id="container-charts"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Highcharts from "highcharts";

export default {
  name: "Charts",
  computed: mapState({
    charts: state => state.charts
  }),
  watch: {
    charts() {
      this.dataShource();
    }
  },
  methods: {
    dataShource() {
      const hours_quantity = this.charts.hours_quantity;
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
          text: "Horas de música vs quntidade de bandas"
        },
        subtitle: {
          text: ""
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
            text: ""
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
            name: "Horas de música",
            data: hours_quantity.quantity
          },
          {
            name: "Quantidade de bandas",
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