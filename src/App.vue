<template>
   <div>
      我是App
      <test-demo></test-demo>
      <el-button @click="$router.push('/home')">跳首页</el-button>
      <el-button @click="goList">跳列表页</el-button>
   </div>
</template>


<script  setup>
   import { useRoute,useRouter } from 'vue-router';
   const route = useRoute()
   const router =useRouter()
   const goList = () =>{
        router.push('/list')
       console.log(router,route)
   }
</script>

<style scoped>

</style>
