<template>
  <div id="Header">
    <el-row>
      <el-col :span="8">
        <!-- logo -->
        <div class="logo">
          <img src="@/assets/img/logo.jpg" alt width="60" height="60" />
          <h2>欢迎来到书城！</h2>
        </div>
      </el-col>
      <el-col :span="10">
        <!-- 头部导航 -->
        <div class="headNav">
          <div class="navItem" v-for="(item,index) in navList" >
            <router-link
              :to="index==0?'/':'/tag/'+item.name"
              @click.native="handleClick(item.name)"
              :class="title==item.name?'active':''"
              exact
            >{{item.name}}</router-link>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <!-- 右边操作栏 -->
        <div class="opeations">
          <!-- 搜索栏 -->
          <div class="searchBox">
            <el-popover placement="bottom-end" width="800" trigger="click">
              <el-autocomplete placeholder="书名、作者" id="serchBar">
                <el-button type="primary" slot="append">搜索</el-button>
              </el-autocomplete>
              <template slot="reference">
                <img
                  src="@/assets/img/search.png"
                  alt
                  width="40"
                  height="40"
                  style="border-radius:50%"
                />
              </template>
            </el-popover>
          </div>
          <!-- 个人中心栏 -->
          <div class="loginBox">
            <el-popover placement="bottom-end" width="300" trigger="click">
              <el-card class="box-card">
                <div id="top">
                  <img src="@/assets/img/login.png" alt width="50" height="50" />
                  <div>
                    <router-link :to="{name:'login'}" style="color:#1890ff">登录</router-link>
                    <span></span>
                    <router-link :to="{name:'register'}">注册</router-link>
                  </div>
                </div>
                <div class="bottom">
                  <router-link to="/cart">
                    <i class="el-icon-shopping-cart-2"></i>购物车
                  </router-link>
                  <router-link to="/bookmark">
                    <i class="el-icon-star-off"></i>我的收藏
                  </router-link>
                  <router-link to="/register">
                    <i class="el-icon-s-order"></i>
                    我的订单
                  </router-link>
                </div>
              </el-card>
              <template slot="reference">
                <img
                  src="@/assets/img/login.png"
                  alt
                  width="40"
                  height="40"
                  style="border-radius:50%"
                />
              </template>
            </el-popover>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {getList} from '../../js/api'
export default {
  name: "Header",
  data() {
    return {
      navList: [
        { id: 0, name: "首页" },
        { id: 1, name: "文学" },
        { id: 2, name: "流行" },
        { id: 3, name: "文化" },
        { id: 4, name: "生活" },
        { id: 5, name: "科技" }
      ]
    };
  },
  created(){
  },
   watch:{
    },
  computed:{
    ...mapState(['title','booksTags','BooksList']),
   
  },
  methods: {
   async handleClick(i) {
    
    
    this.$store.dispatch('getBooksList',i)
    this.$store.dispatch('BooksList',{title:i,num:40}) 
    // console.log(this.BooksList)
    }
  }
};
</script>
<style lang="less" scoped>
#Header {
  height: 80px;
  background: #101224;
  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .headNav {
    width: 100%;
    display: flex;
    .navItem {
      flex: 1;
      a {
        display: block;
        height: 60px;
        line-height: 60px;
        color: #fff;
      }
    //    .router-link-active{
    //   border-bottom: 2px solid #1890ff ;
    //     color: #1890ff;
    // }
      .active {
        border-bottom: 2px solid #1890ff;
        color: #1890ff;
      }
    }
  }
  
  .loginBox {
    margin-left: 15px;
  }
  .box-card {
    padding: 0;
    width: 100%;
    .el-card__body a {
      font-size: 24px;
    }
  }
  .logo {
    h2 {
      margin-left: 10px;
      color: #1890ff;
    }
  }
  
}
</style>
<style lang='less'>
.el-popover {
  display: flex;
  justify-content: center;
}
.el-autocomplete {
  width: 80%;
}
.el-card {
  width: 100%;
}
#top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    width: 120px;
    display: flex;
    justify-content: space-around;
    a {
      display: inline-block;
      font-size: 22px;
      font-weight: bold;
    }
    a:hover {
      color: #1890ff;
    }
  }
}
.bottom {
  display: flex;
  flex-direction: column;
  a {
    display: block;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    color: #666;
  }
  a:hover {
    color: #1890ff;
  }
}
.el-input .el-input-group__append {
  background: #1890ff;
  color: #fff;
  font-size: 18px;
  width: 60px;
  text-align: center;
}
</style>