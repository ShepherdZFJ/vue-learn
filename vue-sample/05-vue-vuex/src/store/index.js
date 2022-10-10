//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
	/* increase(context,value){
		console.log('actions中的increase被调用了')
		context.commit('INCREASE',value)
	},
	decrease(context,value){
		console.log('actions中的decrease被调用了')
		context.commit('DECREASE',value)
	}, */
	increaseOdd(context,value){
		console.log('actions中的increaseOdd被调用了')
		if(context.state.sum % 2){
			context.commit('INCREASE',value)
		}
	},
	increaseWait(context,value){
		console.log('actions中的increaseWait被调用了')
		setTimeout(()=>{
			context.commit('INCREASE',value)
		},500)
	}
}
//准备mutations——用于操作数据（state）
const mutations = {
	INCREASE(state,value){
		console.log('mutations中的INCREASE被调用了')
		state.sum += value
	},
	DECREASE(state,value){
		console.log('mutations中的DECREASE被调用了')
		state.sum -= value
	},
    ADD_STUDENT(state, value){
        console.log("mutations中的ADD_STUDENT被调用了")
        state.studentList.unshift(value)
    }
}
//准备state——用于存储数据
const state = {
	sum:0, //当前的和
    school:"浙工大",
    subject:'计算机',
    studentList:[{id:'001', name:'张三'}]
}

//准备getters——用于将state中的数据进行加工
const getters = {
	bigSum(state){
		return state.sum*10
	}
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
    getters
})