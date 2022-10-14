import VueRouter from "vue-router";
import Main from "@/views/Main";
import Home from "@/views/Home";
import User from "@/views/User";
import Mall from "@/views/Mall";
import PageOne from "@/views/PageOne";
import PageTwo from "@/views/PageTwo";

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Main,
            children:[
                // 子路由
                { path: 'home', name: 'home', component: Home }, // 首页
                { path: 'user', name: 'user', component: User }, // 用户管理
                { path: 'mall', name: 'mall', component: Mall }, // 商品管理
                { path: 'page1', name: 'page1', component: PageOne }, // 页面1
                { path: 'page2', name: 'page2', component: PageTwo }, // 页面2
            ]
        }
    ]
    
})