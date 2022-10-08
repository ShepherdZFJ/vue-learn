<template>
  <div id="app">
    <SmsInfo></SmsInfo>
  </div>
</template>

<script>
import SmsInfo from './components/SmsInfo.vue';

export default {
  name: 'App',
  components: {
    SmsInfo
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
