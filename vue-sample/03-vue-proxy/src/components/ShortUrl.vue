<template>
  <div>
    <button @click="getVisitRecord">点我获取短链接访问记录</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    "name":"ShortUrl",
    methods:{
        getVisitRecord(){
            axios.get('http://localhost:8080/api/visit').then(
					response => {
						console.log('请求短链访问记录成功了',response.data)
					},
					error => {
						console.log('请求短链访问记录失败了',error.message)
					}
				)
        }
    }

}
</script>

<style>

</style>