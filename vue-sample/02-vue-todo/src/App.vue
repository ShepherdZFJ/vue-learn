<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" ref="img">
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch"></School>
    <Student sex="男"></Student>
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
},
methods:{
  showDOM(){
    console.log(this.$refs.img) //真实DOM元素
		console.log(this.$refs.btn) //真实DOM元素
		console.log(this.$refs.sch) //School组件的实例对象（vc）
  }
}
}
</script>


