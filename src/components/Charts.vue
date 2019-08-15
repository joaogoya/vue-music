<template>
  <div>
    <div class="row">
      <div class="col xs-12 bg-white">

      </div>
    </div>
  </div>
</template>

<script>
import APIService from "../services/APIService";
export default {
  name: "Charts",
  data() {
    return {
      
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
