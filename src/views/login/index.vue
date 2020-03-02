<template>
  <div class="login">
    <div class="bg">
      <img src="@/assets/img/bg1.jpg" alt width="100%" height="100%" />
    </div>
    <div class="login_box">
      <div class="login_content">
        <div class="title">
          <router-link :to="{name:'login'}">登录</router-link>
          <router-link :to="{name:'register'}">注册</router-link>
        </div>
        <div>
           <router-view></router-view>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login"
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .login_box {
    position: relative;
    z-index: 100;
    width: 400px;
    margin: 0 auto;
    background: #fff;
    .login_content{
       margin: 0 auto;
       width: 400px;
      .title {
          height: 40px;
          padding: 0 80px;
          display: flex;
          justify-content: space-around;
          a {
           color: #999;
           font-size: 22px;
         }
         a:hover{
           color: #1890ff;
         }
         .router-link-active{
             color: #1890ff;
             border-bottom: 2px solid #1890ff;
         }

       }
    }
  
  }
}
</style>