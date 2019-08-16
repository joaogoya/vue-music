<template>
  <div>
    <div class="row">
      <div class="col-sm-4 card">
        <p class="card-title">
          <img src="../assets/img/music-icon.png" alt="icone de uma nota musical" />
          <span>Horas de música tocadas</span>
        </p>
        <span class="info">{{ cardOne.hours }}h</span>
        <span class="badge">
          <div class="arrow-up"></div>
          {{ cardOne.percent_diference }}%
        </span>
      </div>
      <div class="col-sm-4 card">
        <p class="card-title">
          <img src="../assets/img/music-icon.png" alt="icone de uma nota musical" />
          <span>Quantidade de bandas de rock</span>
        </p>
        <span class="info">{{ cardTwo.bands }}</span>
        <span class="badge">
          <div class="arrow-up"></div>
          {{ cardTwo.percent_diference }}%
        </span>
      </div>
      <div class="col-sm-4 card">
        <p class="card-title">
          <img src="../assets/img/music-icon.png" alt="icone de uma nota musical" />
          <span>Perdas precoces de artistas incríveis</span>
        </p>
        <span class="info">{{ cardThree.losts }}</span>
        <span class="badge red">
          <div class="arrow-up"></div>
          {{ cardThree.percent_diference }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Cards",
  data() {
    return {
      cardOne: {},
      cardTwo: {},
      cardThree: {}
    };
  },
  computed: mapState({
    storedCards: state => state.cards
  }),
  watch: {
    storedCards() {
      this.getCards()
    }
  },
  methods: {
    getCards() {
        this.cardOne = this.storedCards.cards.hours_music;
        this.cardTwo = this.storedCards.cards.quantity_bands;
        this.cardThree = this.storedCards.cards.lost_artists;
    }
  },
};
</script>

<style lang="scss" scoped></style>
