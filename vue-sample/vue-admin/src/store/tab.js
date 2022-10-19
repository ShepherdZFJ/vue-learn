
const state = {
    isCollapse:false,
    tabsList: [
        {
            path: "/",
            name: "home",
            label: "首页",
            icon: "s-home",
            url: "Home/Home",
        }
    ], // 面包屑数据
}

const mutations={
    collapseMenu(state) {
        state.isCollapse = !state.isCollapse
    },
    selectMenu(state, val) {
        console.log( 'val11111', val)
        // 判断添加的数据是否为首页
        if (val.name !== 'home') {
            const index = state.tabsList.findIndex(item => item.name === val.name)
            // 如果不存在
            if (index === -1) {
                state.tabsList.push(val)
            }
        }
        console.log( 'tabsList', state.tabsList)
    },
    // 删除指定的tag数据
    closeTag(state, item) {
        // console.log(item, 'item')
        const index = state.tabsList.findIndex(val => val.name === item.name)
        state.tabsList.splice(index, 1)
    },


}

export default {
    namespaced:true,
    state,
    mutations
}