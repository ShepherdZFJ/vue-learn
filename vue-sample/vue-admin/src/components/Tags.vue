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
import {mapState} from 'vuex'
export default {
    name:'Tags',
    computed:{
        ...mapState('tab', ['tabsList'])
    },
    methods:{
        // 点击tag跳转的功能
        changeMenu(item) {
            // console.log(item)
            this.$router.push({ name: item.name })
        },
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