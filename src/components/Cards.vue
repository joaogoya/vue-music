<template>
  <div :load="getCards()">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 card">
          <p class="card-title">
            <img src="../assets/img/music-icon.png" alt="icone de uma nota musical" />
            <span>Horas de música tocadas</span>
          </p>
          <span class="info"> {{ cardOne.musicHours }}h </span>
          <span class="badge">
            <div class="arrow-up"></div>{{ cardOne.percent_diference }}%
          </span>
        </div>
        <div class="col-sm-4 card">
          <p class="card-title">
            <img src="../assets/img/music-icon.png" alt="icone de uma nota musical" />
            <span>Quantidade de bandas de rock</span>
          </p>
          <span class="info">{{ cardTwo.bands }}</span>
          <span class="badge">
            <div class="arrow-up"></div>{{ cardTwo.percent_diference }}%
          </span>
        </div>
        <div class="col-sm-4 card">
          <p class="card-title">
            <img src="../assets/img/music-icon.png" alt="icone de uma nota musical" />
            <span>Perdas precoces de artistas incríveis</span>
          </p>
          <span class="info">{{ cardThree.losts }}</span>
          <span class="badge">
            <div class="arrow-up"></div>{{ cardThree.percent_diference }}%
          </span>
        </div>
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
      cardOne: {
        musicHours:'',
        percent_diference: ''
      },
      cardTwo: {
        bands:'',
        percent_diference: ''
      },
      cardThree: {
        losts:'',
        percent_diference:''
      }
    };
  },
  methods: {
    getCards() {
      return APIService.getCards().then(response => {
        this.cardOne.musicHours = response.cards.hours_music.hours;
        this.cardOne.percent_diference = response.cards.hours_music.percent_diference;
        this.cardTwo.bands = response.cards.quantity_bands.bands;
        this.cardTwo.percent_diference = response.cards.quantity_bands.percent_diference;
        this.cardThree.losts = response.cards.lost_artists.losts;
        this.cardThree.percent_diference = response.cards.lost_artists.percent_diference  
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
