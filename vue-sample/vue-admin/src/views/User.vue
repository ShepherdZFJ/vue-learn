<template>
  <h1>我是user</h1>
</template>

<script>
import { getUser } from '../api'
export default {
    name:"User",
    data(){
      return {

      }
    },
    mounted(){
      getUser().then(({ data }) => {
            console.log("userList:",data)
        })
    }

}
</script>

<style>

</style>