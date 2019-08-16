import axios from "axios";
export default {
  getCards() {
    return axios
      .get("https://pmweb-dev.github.io/resumeCards.json")
      .then(response => response.data);
  },
  getCharts() {
    return axios
      .get("https://pmweb-dev.github.io/hoursQuantity.json")
      .then(response => response.data);
  },
  getMusics() {
    return axios
      .get("https://pmweb-dev.github.io/musics.json")
      .then(response => response.data);
  }
};
