<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
	//引入组件
import Student from './components/Student.vue';
import School from './components/School';

export default {
  name: 'App',
  components: {
    Student,
    School
}
}
</script>


