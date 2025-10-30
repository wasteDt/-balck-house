//用户模块 token setToken removeToken
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('big-counter',()=>{
     const counter=ref(0)
     const add=(n)=>{
       counter.value+=n
     }
   return {
       counter,
       add
   }
},
)