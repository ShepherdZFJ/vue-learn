<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="showName">点我显示姓名</button>
  </div>
</template>

<script>
export default {
    name:"Student",
    data(){
        return {
            name:"shepherd",
            age:19
        }
    },
    "methods":{
       showName(){
        alert(this.name)
       } 
    },
    props:{
      sex:{
        type:String,
        required:true
      }
    }
}
</script>

<style scoped>
  .demo{
    background-color: blue;
  }
</style>