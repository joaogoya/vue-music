<template>
  <div id="app">
      <Cards></Cards>
      <charts></charts>
      <List></List>
  </div>
</template>

<script>
import Cards from './components/Cards.vue'
import Charts from './components/Charts.vue'
import List from './components/List.vue'

export default {
  name: "app",
  components: {
    Cards,
    Charts,
    List
  }
};
</script>

<style lang="scss">
@import "./styles/global.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
