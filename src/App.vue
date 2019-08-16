<template>
  <div id="app">
    <div id="highlight-bar">
      <div class="container">
        <h1>
          <img src="./assets/img/pm-logo.png" alt="Logo da PM" title="PM-MUSIC" class="icon-logo" />
        </h1>
        <img
          src="./assets/img/hangloose-icon.png"
          alt="Icone de um hangloose"
          class="icon-hangloose"
        />
      </div>
    </div>
    <div class="container">
      <h2 class="title">Overview</h2>
      <Cards></Cards>
      <charts></charts>
      <h2 class="title">Musicas</h2>
      <List></List>
    </div>
    <div id="highlight-bar">
      <div class="container">
        <img src="./assets/img/pm-logo.png" alt="Logo da PM" class="icon-logo" />
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "./components/Cards.vue";
import Charts from "./components/Charts.vue";
import List from "./components/List.vue";
import APIService from "./services/APIService";

export default {
  name: "app",
  components: {
    Cards,
    Charts,
    List
  },
  mounted() {
    this.getCards();
    this.getCharts();
    this.getMusics();
  },
  methods: {
    getCharts() {
      APIService.getCharts().then(data => {
        this.$store.commit("GET_CHARTS", data);
      });
    },

    getCards() {
      APIService.getCards().then(data => {
        this.$store.commit("GET_CARDS", data);
      });
    },

    getMusics() {
      APIService.getMusics().then(data => {
        this.$store.commit("GET_MUSICS", data);
      });
    }
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
@import "./styles/global.scss";
</style>
