<template>
  <section class="home">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>今日新增商户数</span>
        <P>0</P>
      </div>
      <div class="">
        本周
      </div>
      <P>
        0
      </P>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix title">
        <span>今日交易金额</span>
        <P>0</P>
      </div>
      <div class="">
        本周
      </div>
      <P>
        0
      </P>
    </el-card>
  </section>

</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        msg: "msg"
      }
    }
  }
</script>

<style scoped>
  .box-card {
    width: 450px;
    margin: 0 10px;
    float: left;
  }
  .el-card span{
    font-size: 18px;
    color: #0091D7;
  }
</style>
