<template>
  <div>{{ msg }}</div>
</template>

<script>
import APIService from "../services/APIService";
export default {
  name: "Charts",
  data() {
    return {
      msg: "Charts"
    };
  },
  methods: {
    getCharts() {
      return APIService.getCharts().then(response => {
        /* eslint-disable no-console */
        console.table(response);
      });
    }
  },
  created() {
    this.getCharts();
  }
};
</script>

<style lang="scss" scoped></style>
