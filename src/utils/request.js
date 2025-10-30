import axios from 'axios'
import{useUserStore} from '@/stores'
import{ElMessage} from 'element-plus'
import router from '@/router'
const baseUPL ='http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
    // ToDO 1. 基础地址，超时时间
    baseURL:baseUPL,
    timeout:10000
})

instance.interceptors.request.use(config => {
  // ToDo 2. 携带token
    config.headers.Authorization = useUserStore.token
  return config
},
error => Promise.reject(err)
)

instance.interceptors.response.use(
   (res)=>{
     // ToDo 3. 处理业务失败
     //ToDo 4. 摘取核心响应数据
     if(res.data.code ===0){
        return res
     }
     ElMessage.error(res.data.message || '服务异常')
     return Promise.reject(res.data)
   },
   (err)=>{
   // ToDo 5. 处理401错误
   // 错误的特殊情况：401 未授权或者 token 过期
    if(err.response?.status === 401){
      router.push('/login')
    }

   //错误的默认情况 =>只要给提示错误
    ElMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
   }  
)
export default instance
export{baseUPL}