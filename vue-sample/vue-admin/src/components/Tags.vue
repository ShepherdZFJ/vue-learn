<template>
    <div class="tabs">
        <el-tag
            v-for="(item, index) in tabsList"
            :key="item.path"
            :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'plain'"
            @click="changeMenu(item)"
            @close="handleClose(item, index)"
            size="small"
            >
            {{ item.label }}
        </el-tag>
    </div>
  
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name:'Tags',
    computed:{
        ...mapState('tab', ['tabsList'])
    },
    methods:{
        ...mapMutations('tab', ['closeTag']),
        // 点击tag跳转的功能
        changeMenu(item) {
            // console.log(item)
            this.$router.push({ name: item.name })
        },
         // 点击tag删除的功能
         handleClose(item, index) {
            // 调用store中的mutation
            console.log("closeTag::", this)
            this.closeTag(item)
            const length = this.tabsList.length
            // 删除之后的跳转逻辑
            if (item.name !== this.$route.name) {
                return
            }
            // 表示的是删除的最后一项
            if (index === length) {
                this.$router.push({
                    name: this.tabsList[index - 1].name
                })
            } else {
                this.$router.push({
                    name: this.tabsList[index].name
                })
            }
        }
    }

}
</script>

<style lang="less" scoped>
.tabs {
    padding: 20px;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>