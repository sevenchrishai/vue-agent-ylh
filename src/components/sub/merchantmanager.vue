<template>
  <section class="merchant-manager">
    <!--搜索内容表单-->
    <el-form ref="form" :model="form" @submit.prevent="onSubmit" style="margin-top: 10px">
      <el-form :inline="true" :model="search" class="demo-form-inline">
        <el-row>
          <el-col :span="12">
            <el-form-item label="创建时间">
              <el-date-picker
                v-model="search.c_time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商户编号">
              <el-input v-model="search.merchantId" placeholder="商户编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商户名称">
              <el-input v-model="search.merchantName" placeholder="商户名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="审核状态">
              <!--<el-dropdown trigger="click" @command="handleCommand">-->
                <!--<span class="el-dropdown-link">-->
                  <!--审核状态<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                <!--</span>-->
                <!--<el-dropdown-menu slot="dropdown">-->
                  <!--<el-dropdown-item command="1">等待审核</el-dropdown-item>-->
                  <!--<el-dropdown-item command="2">审核通过</el-dropdown-item>-->
                  <!--<el-dropdown-item command="3">审核拒绝</el-dropdown-item>-->
                <!--</el-dropdown-menu>-->
              <!--</el-dropdown>-->
              <el-select v-model="search.status" placeholder="审核状态">
                <el-option label="等待审核" value="1"></el-option>
                <el-option label="审核通过" value="2"></el-option>
                <el-option label="审核拒绝" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" @click="searchList" icon="search">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-form>
    <!--单选表格-->
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        property="merchantId"
        label="商户编号"
        width="200">
      </el-table-column>
      <el-table-column
        property="name"
        label="商户名称"
        width="120">
      </el-table-column>
      <el-table-column
        property="time"
        label="创建时间">
      </el-table-column>
      <el-table-column
        property="status"
        label="审核状态">
      </el-table-column>
    </el-table>
    <el-col :span="24" class="pag">
      <el-button @click="setCurrent(tableData[0])">选中第一行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.curPage"
                     :page-sizes="[10,20,30,50]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" style="float: right">
      </el-pagination>
    </el-col>
  </section>
</template>

<script>
  export default {
    name: "merchantmanager",
    data() {
      return {
        tableData: [
          {
            merchantId: '8888880000221001',
            name: 'yin761',
            time: '2018-08-08 09:17:19',
            status: '审核通过'
          },
          {
            merchantId: '8888880000221002',
            name: 'yin3',
            time: '2018-08-08 09:17:00',
            status: '审核通过'
          }
        ],
        form: {},
        search: {
          merchantId: '',
          merchantName: '',
          c_time: '',
          status: ''
        },
        currentRow: null,
        total: 0,
        listQuery: {
          curPage: 1,
          limit: 20,
          pageSize: 10,
          importance: undefined,
          title: undefined,
          type: undefined,
          sort: '+id'
        }
      }
    },
    created() {
      this.total = this.tableData.length;
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        console.log(`currentRow:${JSON.stringify(this.currentRow)}`)
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      },
      searchList(){
        console.log('search')
      },
      //操作分页
      handleSizeChange(val) {
        this.listQuery.pageSize = val;
      },
      handleCurrentChange(val) {
        this.listQuery.curPage = val;
      }
    }
  }
</script>

<style scoped>
.el-dropdown{
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  padding: 0 15px;
}
</style>
