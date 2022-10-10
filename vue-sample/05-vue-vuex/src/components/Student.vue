<template>
  <div>
    <h1>学生信息</h1>
    <h2 style="color:red">Count组件求和为：{{sum}}</h2>
    <input type="text" placeholder="请输出姓名" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="stu in studentList" :key="stu.id">{{stu.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:"Student",
    data(){
        return {
            name:""
        }
    },
    computed:{
        ...mapState(['sum', 'studentList'])
    },
    methods:{
        add(){
            const studentObj = {id:nanoid(), name:this.name}
            this.$store.commit('ADD_STUDENT', studentObj)
            this.name=''
        }
    }

}
</script>

<style>

</style>