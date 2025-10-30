<template>
   <div>
      我是App
      <test-demo></test-demo>
      <el-button @click="$router.push('/home')">跳首页</el-button>
      <el-button @click="goList">跳列表页</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>

      <p>{{  userStore.token  }}</p>
      <el-button @click="userStore.setToken('Ber Sid')">登录</el-button>
      <el-button @click="userStore.removeToken()">退出</el-button>
       
   </div>
     <p>{{ CounterStore.counter }}</p>
     <el-button @click="CounterStore.add(2)">添加</el-button>
</template>


<script  setup>
   import { useRoute,useRouter } from 'vue-router';
   import { useUserStore ,useCounterStore} from '@/stores';
   const route = useRoute()
   const router =useRouter()
   const goList = () =>{
        router.push('/list')
       console.log(router,route)
   }
  
   const userStore = useUserStore()
   const CounterStore = useCounterStore()
</script>

<style scoped>

</style>
