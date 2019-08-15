<template>
  <div>
    <!-- <ul :v-if="isReady" id="example-1">
      <li v-for="item in musics">
        {{ item.artist }}
      </li>
    </ul> -->

    <br><br><br>



    <div class="overflow-auto">


    <b-table
      id="my-table"
      :items="musics"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
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
              perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
    };
  },
  methods: {
    getList() {
      return APIService.getList().then(response => {
        this.musics = response.musics;
        this.isReady = true;
        /* eslint-disable no-console */
        console.log("List file");
        console.log(response.musics);
      });
    }
  },
  created (){
    /* eslint-disable no-console */
        console.log("before"),
        this.getList()
  },
  computed: {
      rows() {
        return this.musics.length
      }
    }
  
};
</script>

<style lang="scss" scoped></style>
