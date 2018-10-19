<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="top">
          <div class="l">
            <img src="/static/images/portal_logo.png" alt="">
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
              <i class="el-icon-mobile-phone"></i>
              <i class="el-icon-circle-close"></i>
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
          <el-menu :default-active="0" class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-mobile-phone"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-goods"></i>
              <span slot="title">商家管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-sold-out"></i>
              <span slot="title">交易管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-document"></i>
              <span slot="title">报表管理</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-printer"></i>
              <span slot="title">结算管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>今日新增商户数</span>
              <div>0</div>
            </div>
            <div class="">
              本周
            </div>
            <div>
              0
            </div>
          </el-card>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>今日交易金额</span>
              <div>0</div>
            </div>
            <div class="">
              本周
            </div>
            <div>
              0
            </div>
          </el-card>
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
    name: "home",
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
      }
    }
  }
</script>

<style lang="scss" scoped>
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

  .box-card {
    width: 450px;
    margin: 0 10px;
    float: left;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
  }

  .el-footer{
    width: 100%;
    margin-top: 90px;
    background-color: #fff;
    line-height: 60px;
    text-align: center;
  }
</style>
