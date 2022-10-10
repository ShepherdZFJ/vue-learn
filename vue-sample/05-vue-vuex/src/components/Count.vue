<template>
  <div>
    <!-- <h1>当前求和为：{{sum}}</h1> -->
    <h1>当前求和为奇数再加：{{$store.state.sum}}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
    name:"Count",
    data() {
        return {
            n:1,
            // sum:0
        }
    },
    methods: {
        increment(){
            // this.sum += this.n
            // 直接调mutations
            this.$store.commit('INCREASE', this.n)
        },
        decrement(){
            // this.sum -= this.n
            this.$store.commit('DECREASE', this.n)
        },
        incrementOdd(){
            // if(this.sum%2){
            //     this.sum += this.n
            // }
            this.$store.dispatch('increaseOdd', this.n)
        },
        incrementWait(){
            // setTimeout(()=>{
            //     this.sum += this.n
            // }, 1000)
            this.$store.dispatch('increaseWait', this.n)
        }
    },
    mounted() {
        console.log("Count", this)
    }

}
</script>

<style lang="css" scoped>
    button{
        margin-left: 5px;
        font-size: 16;
    }

</style>