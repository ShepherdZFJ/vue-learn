<template>
  <div class="common-tabel">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
        <template slot-scope="scope">
            <span>{{ scope.row.sex == 1 ? '男' : '女' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="birth"
        label="出生日期">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址"
        >
      </el-table-column>

      <el-table-column
        prop="userNo"
        label="用户编号">
      </el-table-column>

      <el-table-column
        prop="account"
        label="账户">
      </el-table-column>

      <el-table-column
        prop="role"
        label="角色">
      </el-table-column>

      <el-table-column
        label="操作">
        <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
      
  </div>
</template>

<script> 
import { getUser } from '../api'
export default {
    name:"User",
    data(){
      return {
        tableData:[],
        total:0

      }
    },
    methods:{
      // 获取列表的数据
      getList() {
            // 获取的列表的数据
            getUser({params: {...this.userForm, ...this.pageData}}).then(({ data }) => {
                console.log(data)
                this.tableData = data.list

                this.total = data.count || 0
            })
        }
    },
    mounted(){
      this.getList()
    }

}
</script>

<style>

</style>