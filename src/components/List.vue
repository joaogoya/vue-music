<template>
  <div :load="getList()">{{ msg }}</div>
</template>

<script>
import APIService from "../services/APIService";
export default {
  name: "List",
  data() {
    return {
      msg: "List"
    };
  },
  methods: {
    getList() {
      return APIService.getList().then(response => {
        /* eslint-disable no-console */
        console.log("List file");
        console.log(response);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
