<template>
  <div id="app">
    <SmsInfo></SmsInfo>
    <ShortUrl></ShortUrl>
  </div>
</template>

<script>
import SmsInfo from './components/SmsInfo.vue';
import ShortUrl from './components/ShortUrl.vue';

export default {
  name: 'App',
  components: {
    SmsInfo,
    ShortUrl
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
