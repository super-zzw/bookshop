<template>
  <div class="sortPage" >
    <div class="sideBar" >
      <div class="title">{{title}}分类</div>
       <div class="sortItem" v-for="(item,index) in booksTags"  >
         <router-link :to="'/tag/'+item.title" @click.native="getindex(item.title)" >{{item.title}}</router-link>
         </div>
    </div>
    <div class="shopList" style="background:lightblue">
     <!-- <keep-alive> -->
    <router-view ></router-view>
    <!-- </keep-alive> -->
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {getTags,getList} from '../../js/api'
import BookList from '../bookList'
  export default {
    name: 'Sort',
    data(){
      return{
        clickItem:''
      }
    },
    
    components:{BookList},
   async created(){
      
    },
    computed:{
       ...mapState(['booksTags','title',"BooksList"])
    },
    methods:{
      async getindex(i){  
         this.$store.dispatch('BooksList',{title:i,num:20})
       }
      
    }
  
  }
</script>
<style lang="less" scoped>
.sortPage{
  min-height: 500px;
  display: flex;
  flex-direction: row;
  background: #fff;
  .sideBar{
    width: 20%;
    text-align:center;
    div{
      height: 50px;
      line-height: 50px;
    }
    .title{
      font-weight: bold;
      font-size: 20px;
      background: #1890ff
    }
  }
  .shopList{
    width: 80%
  }
  .sortItem{
    a{
   color: #999;
   font-weight: bold;
   display: block;
   width: 100%;
   height: 100%;
    }
    .router-link-active{
      color: #1890ff;
      font-size: 22px;
    }
 
  }
  .sortItem:hover{
  background: lightblue;
  cursor: pointer;
   a{
      color: #1890ff;
      
   }
  }
}
</style>