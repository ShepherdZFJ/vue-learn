<template>
    <div>
        <button @click="getSmsPlan">点击获取短信计划1</button>
        <button @click="getSmsRecord">点击获取短信记录</button>
    </div>
  
</template>

<script>
import axios from 'axios'
export default {
    "name":"SmsTest",
    methods:{
        getSmsPlan(){
            axios.get('http://localhost:8080/sms/send/plan').then(
					response => {
						console.log('请求短信计划成功了',response.data)
					},
					error => {
						console.log('请求短信计划失败了',error.message)
					}
				)
        },
        getSmsRecord(){
            axios.get('http://localhost:8080/sms/send/record').then(
					response => {
						console.log('请求短信记录成功了',response.data)
					},
					error => {
						console.log('请求短信记录失败了',error.message)
					}
				)
        }
    }

}
</script>

<style>

</style>