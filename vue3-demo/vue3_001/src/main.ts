
// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
console.log("app,", app)

