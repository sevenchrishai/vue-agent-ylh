<template>
  <div class="index" id="app">
    <el-container>
      <el-header>
        <div class="top">
          <div class="l">
            <img src="../assets/img/portal_logo.png" alt="">
            <span>欢迎您！管理员/admin</span>
          </div>
          <div class="r">
            <el-dropdown>
              <span class="el-dropdown-link">
                语言<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>中文</el-dropdown-item>
                <el-dropdown-item>English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="exit">
              <router-link tag="i" class="el-icon-mobile-phone" to="luckywheel"></router-link>
              <i class="el-icon-circle-close" @click="logout"></i>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="l">
            <span></span>
          </div>
          <div class="r">
            <el-button type="primary large">未结算金额</el-button>
          </div>
        </div>
      </el-header>
      <el-container class="main">
        <el-aside width="200px">
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
            <el-menu-item index="/home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/usermanager">
              <i class="el-icon-mobile-phone"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/merchantmanager">
              <i class="el-icon-goods"></i>
              <span slot="title">商家管理</span>
            </el-menu-item>
            <el-menu-item index="/trademanager">
              <i class="el-icon-sold-out"></i>
              <span slot="title">交易管理</span>
            </el-menu-item>
            <el-menu-item index="/reportmanager">
              <i class="el-icon-document"></i>
              <span slot="title">报表管理</span>
            </el-menu-item>
            <el-menu-item index="/settlemanager">
              <i class="el-icon-printer"></i>
              <span slot="title">结算管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <!--主窗口-->
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
          <el-tag type="info">关于我们</el-tag>
          <el-tag type="info">联系我们</el-tag>
          <el-tag type="info">隐私政策</el-tag>
          <el-tag type="info">服务条款</el-tag>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        msg: 'hello'

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //退出登录
      logout: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          _this.$router.push('/login');
        }).catch(() => {

        });
      },
    },
    components: {
    }
  }
</script>

<style lang="scss">
  .el-header{
    height: 120px !important;
    padding: 0;
    .top {
      background-color: #0091D7;
      height: 60px;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      .l{
        line-height: 60px;
        img{
          height: 48px;
          vertical-align: middle;
        }
        span{
          margin-left: 10px;
          color: #fff;
          font-size: 16px;
        }
      }
      .r{
        .el-dropdown{
          margin-top: 19px;
          color: white;
        }
        .exit{
          display: inline-block;
          line-height: 60px;
          margin-left: 20px;
          font-size: 24px;
          i {
            margin-right: 10px;
            cursor: pointer;
            color: white;
          }
        }
      }
    }
    .bottom{
      height: 60px;
      background-color: #f3f4f5;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #EEE;
      box-sizing: border-box;
      .l{
        line-height: 60px;
        margin-left: 60px;
        img{
          height: 48px;
          vertical-align: middle;
        }
        span{
          margin-left: 10px;
          color: #333;
          font-size: 16px;
        }
      }
      .r{
        line-height: 60px;
      }
    }
  }

  .main{
    width: 1200px;
    margin: 0 auto;
  }

  .pag{
    background-color: #f2f2f2;
    padding: 10px;
    margin: 10px 0px;
  }

  .panel .panel-title {
    color: #535351;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
  }

  .fl{
    float: left;
  }
  .fr{
    float: right;
  }

  .el-menu{
    background-color: #D3DCE6;
    color: #48576a;
    .el-menu-item.is-active{
      border-right: 4px solid #20a0ff;
      color: #20a0ff;
    }
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #fff;
    color: #48576a;
    text-align: left;
  }

  .el-footer{
    width: 100%;
    margin-top: 190px;
    background-color: #fff;
    line-height: 60px;
    text-align: center;
  }
</style>
