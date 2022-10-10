<template>
  <div>
    <!-- <h1>当前求和为：{{sum}}</h1> -->
    <h1>当前求和为奇数再加：{{$store.state.sum}}</h1>
    <h2>当前求和放大10倍为：{{bigSum}}</h2>
    <h3>学校：{{school}}, 专业：{{subject}}</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>

    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {
    name:"Count",
    data() {
        return {
            n:1,
            // sum:0
        }
    },
    computed: {
        ...mapState(['sum', 'school', 'subject']),
        ...mapGetters(['bigSum'])
    },
    methods: {
        // increment(){
        //     // this.sum += this.n
        //     // 直接调mutations
        //     this.$store.commit('INCREASE', this.n)
        // },
        // decrement(){
        //     // this.sum -= this.n
        //     this.$store.commit('DECREASE', this.n)
        // },

        ...mapMutations({increment:'INCREASE',decrement:'DECREASE'}),

        // incrementOdd(){
        //     // if(this.sum%2){
        //     //     this.sum += this.n
        //     // }
        //     this.$store.dispatch('increaseOdd', this.n)
        // },
        // incrementWait(){
        //     // setTimeout(()=>{
        //     //     this.sum += this.n
        //     // }, 1000)
        //     this.$store.dispatch('increaseWait', this.n)
        // }

        //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
			...mapActions({incrementOdd:'increaseOdd',incrementWait:'increaseWait'})
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
    h2{
        color: blue;
    }

</style>