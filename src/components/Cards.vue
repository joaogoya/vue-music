<template>
  <div :load="getCards()">
      <div class="container">
          <div class="row">
              <div class="col-sm-6">aaaaa</div>
              <div class="col-sm-6">bbbbbb</div>
          </div>
      </div>
  </div>
</template>

<script>
import APIService from "../services/APIService";
export default {
  name: "Cards",
  data() {
    return {
      msg: "Cards"
    };
  },
  methods: {
    getCards() {
      return APIService.getCards().then(reponse => {
        /* eslint-disable no-console */
        console.table(reponse);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
