<template>
  <section class="user-manager">
    <el-table
      :data="tableData5"
      style="width: 100%">
      <!--展开行-->
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户ID">
              <span>{{ props.row.userId }}</span>
            </el-form-item>
            <el-form-item label="用户状态">
              <span>{{ props.row.status }}</span>
            </el-form-item>
            <el-form-item label="用户昵称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="联系方式">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="邮箱地址">
              <span>{{ props.row.mail }}</span>
            </el-form-item>
            <el-form-item label="创建时间">
              <span>{{ props.row.time }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="用户ID"
        prop="userId">
      </el-table-column>
      <el-table-column
        label="用户昵称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="创建时间"
        prop="time">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="props">
          <el-button
            size="mini"
            @click="handleEdit(props.$index, props.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(props.$index, props.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  export default {
    name: "usermanager",
    data() {
      return {
        tableData5: [
          {
            userId: 'yy',
            name: 'yyyy',
            status: '正常',
            phone: '+855-0189464124',
            mail: '123@qq.com',
            time: '2018-07-23 14:45:43'
          },
          {
            userId: 'test1',
            name: '45768786768764',
            status: '正常',
            phone: '+855-0189123456',
            mail: '123@qq.com',
            time: '2018-07-23 15:06:11'
          },
          {
            userId: 'yin3',
            name: 'yin',
            status: '正常',
            phone: '+855-0189123456',
            mail: '123@qq.com',
            time: '2018-07-25 18:15:03'
          },
          {
            userId: 'y827',
            name: 'yin',
            status: '正常',
            phone: '+855-0189464124',
            mail: '123@qq.com',
            time: '2018-08-27 10:54:37'
          },
          {
            userId: 'test3',
            name: 'ttt',
            status: '正常',
            phone: '+855-0189463145',
            mail: '123@qq.com',
            time: '2018-08-27 16:55:01'
          },
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.tableData5.splice(index,1)
      }
    }

  }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
