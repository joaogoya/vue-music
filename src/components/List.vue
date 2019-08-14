<template>
    <div :load="getList()">
        {{ msg }}
    </div>
</template>

<script>
import APIService from "../services/APIService";
export default {
    name: 'List',
    data(){
        return {
            msg: 'List'
        }
    },
      methods: {
    getList() {
      return APIService.getList().then(reponse => {
        /* eslint-disable no-console */
        console.log("List file");
        console.log(reponse);
      });
    }
  }
}
</script>


<style lang="scss" scoped>
</style>

