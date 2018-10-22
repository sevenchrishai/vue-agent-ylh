<template>
  <section class="merchant-manager">
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
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[0])">选中第一行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
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
        currentRow: null
      }
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        console.log(`currentRow:${JSON.stringify(this.currentRow)}`)
      }
    }
  }
</script>

<style scoped>

</style>
