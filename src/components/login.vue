<template>
  <div class="login">
    <header class="header">
      <div class="logo">
        <img src="../assets/img/portal_logo.png" alt="logo">
        <span>{{logo_title}}</span>
      </div>
      <div class="language">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <!--container布局容器-->
    <el-container>
      <el-header></el-header>
      <el-main>
        <div class="login-part">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <h4>代理商登录</h4>
            <el-form-item label="" prop="loginId">
              <el-input v-model="ruleForm.loginId" placeholder="您的代理商编号"></el-input>
            </el-form-item>
            <el-form-item label="" prop="name">
              <el-input v-model="ruleForm.name" placeholder="您的登录名"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pwd">
              <el-input v-model="ruleForm.pwd" placeholder="请输入登录密码" type="password"></el-input>
            </el-form-item>
            <el-form-item label="记住我" class="remember-me">
              <el-switch v-model="ruleForm.rememberMe"></el-switch>
            </el-form-item>
            <el-form-item>
              <el-button type="primary large" @click="submitForm('ruleForm')" class="login-btn" v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        fullscreenLoading: false,
        logo_title: '代理商后台管理系统',
        language: '语言',
        ruleForm: {
          loginId: 'admin',
          name: 'admin',
          pwd: 'admin',
          rememberMe: false
        },
        rules: {
          loginId: [
            {required: true, message: '请输入您的代理商编号', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          name: [
            {required: true, message: '请输入您的登录名', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          pwd: [
            {required: true, message: '请输入登录密码', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
        },
      }
    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
            if (valid){
              this.$router.push({path: '/home'})
            }else {
              console.log('error submit')
              return false;
            }
          }, 800);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header {
    width: 1200px;
    height: 95px;
    display: flex;
    padding: 5px;
    margin: 0 auto;
    justify-content: space-between;
    .logo{
      line-height: 95px;
      img{
        vertical-align: middle;
      }
      span{
        margin-left: 10px;
        color: #0091D7;
        font-size: 20px;
      }
    }
    .language{
      .el-dropdown{
        margin-top: 39px;
      }
    }
  }

  .el-header {
    background-color: #0091D7;
  }

  .el-main{
    position: relative;
    width: 1200px;
    margin: 0 auto;
    height: 600px;
    background: url(../assets/img/login_pic.png) no-repeat;
    background-size: 100%;
    .login-part{
      position: absolute;
      left: 50%;
      top: 35%;
      margin: -193px 0 0 -143px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 5px;
      padding: 20px 30px;
      h4{
        font-size: 18px;
        color: #696969;
      }
      .remember-me{
        margin-bottom: 0;
      }
      .login-btn{
        width: 240px;
      }
    }
  }
</style>
