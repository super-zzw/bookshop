<template>
  <div class="books">
    
    <div class="container">
   <div class="booksItem" v-for="item in BooksList" :key="item.id">
     <router-link :to="{name:'details',params:{id:item.id,data:item}}"><img :src="item.image" alt="" width="150" height="200"></router-link>  
      <div class="info">
         <router-link to="#" >{{item.title}}</router-link>
         <div>{{item.author[0]}}</div>
      </div>
        
   </div>

   </div>
  
  </div>
</template>
<script>
import {mapState} from 'vuex'
  export default {
    name: 'BookList',
    data(){
      return{
      }
    },
   
    computed:{
      ...mapState(['booksTags','title','BooksList'])
    },
  async created(){
    console.log(this.$route.params)
  }
    
  }
</script>
<style lang="less" scoped>

.container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
 margin: 15px auto 0;
 width: 850px;
 
  .booksItem{
  width: 160px;
  margin: 0 25px 15px 0;
  border: 2px solid lightseagreen;
  border-radius: 10px;
  padding: 10px;
  .info{
    a{
      display: inline-block;
     line-height: 20px;
     height: 20px;
     width: 150px;
     overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
     }
  }
 
}

}

</style>