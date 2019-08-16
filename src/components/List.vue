<template>
  <div>
    <div class="row">
      <div class="col xs-12 bg-white">
        <div class="overflow-auto">
          <b-table
            id="musics-table"
            :items="musics"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            small
          ></b-table>
        </div>
      </div>
    </div>
    <div class="roww">
      <b-pagination
        class="container-pagination"
        v-model="currentPage"
        :total-rows="rows"
        align="center"
        :per-page="perPage"
        aria-controls="musics-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "List",
  data() {
    return {
      musics: [],
      fields: {
        id: "ID",
        title: "Titulo",
        rate: "Avaliação",
        date_record: "Data de gravação",
        artist: "Artista"
      },
      perPage: 10,
      currentPage: 1
    };
  },
  computed: {
    ...mapState({
      storedMusics: state => state.musics
    }),
    rows() {
      return this.musics.length;
    }
  },
  watch: {
    storedMusics() {
      this.getMusics();
    }
  },
  methods: {
    getMusics() {
      this.musics = this.storedMusics.musics;
    }
  }
};
</script>

<style lang="scss" scoped></style>
