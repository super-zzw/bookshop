<template>
  <div id="app">
     <Header v-if="isShow"/>
    <router-view  :class="isShow?'view':''" ></router-view>
  </div>
</template>
<script>
  import Header from './components/header'
  export default {
    name: 'app',
    components:{Header},
   created(){
     console.log(this.$route.name)
   },
   computed:{
     isShow(){
       if(this.$route.name=='login'||this.$route.name=='register'){
         return false
       }else{
          return true
       }
      
     }
   }
  }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   height: 100vh;
}
.view{
  width: 1140px;
  margin: 0 auto;
  margin-top: 20px;
}


</style>
