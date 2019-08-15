<template>
  <div>
    <div class="overflow-auto">
      <b-table id="my-table" :items="musics" :per-page="perPage" :current-page="currentPage" small></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
  </div>
</template>

<script>
import APIService from "../services/APIService";
export default {
  name: "List",
  data() {
    return {
      musics: [],
      isReady: false,
      perPage: 10,
      currentPage: 1
    };
  },
  methods: {
    getList() {
      return APIService.getList().then(response => {
        this.musics = response.musics;
        this.isReady = true;
      });
    }
  },
  created() {
    this.getList();
  },
  computed: {
    rows() {
      return this.musics.length;
    }
  }
};
</script>

<style lang="scss" scoped></style>
