<template>
  <div id="app">
    <TestUI></TestUI>
    <NavMenu></NavMenu>
  </div>
</template>

<script>
import TestUI from './pages/TestUI.vue'
import NavMenu from './pages/NavMenu.vue'
export default {
  name: 'App',
  components: {
    TestUI,
    NavMenu
}
}
</script>


