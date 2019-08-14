<template>
  <div :load="getCards()">{{ msg }}</div>
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

<style scoped>
div {
  margin: 0%;
}
</style>