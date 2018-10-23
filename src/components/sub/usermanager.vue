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
            @click="handleEdit(props.$index, props.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(props.$index, props.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--工具条-->
    <el-col :span="24" class="pag">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.curPage"
                     :page-sizes="[10,20,30,50]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" style="float: right;">
      </el-pagination>
    </el-col>
    <!--编辑-->
    <el-dialog title="编辑用户信息" :visible.sync="dialogFormVisible">
      <el-form :model="editForm" ref="editForm">
        <el-form-item label="用户昵称" :label-width="formLabelWidth">
          <el-input v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="editForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址" :label-width="formLabelWidth">
          <el-input v-model="editForm.mail" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editSubmit" :loading="loading">确 定</el-button>
      </div>
    </el-dialog>
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
        ],
        dialogFormVisible: false,
        editForm: {
          name: '',
          phone: '',
          mail: ''
        },
        formLabelWidth: '100px',
        loading: false,
        total: 0,
        listQuery: {
          curPage: 1,
          limit: 20,
          pageSize: 10,
          importance: undefined,
          title: undefined,
          type: undefined,
          sort: '+id'
        },
      }
    },
    created() {
      this.total = this.tableData5.length;
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.dialogFormVisible = true;
        this.editForm = Object.assign({}, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('确定删除该用户, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
          this.tableData5.splice(index, 1);
          this.total = this.tableData5.length;
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
        });
      },
      editSubmit() {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.loading = true;
              setTimeout(()=>{
                this.loading = false;
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.dialogFormVisible = false;
              },1000)
            });
          } else {
            console.log('error submit')
            return false;
          }
        })
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
