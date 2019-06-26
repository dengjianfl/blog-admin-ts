<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
html,
body,
#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
