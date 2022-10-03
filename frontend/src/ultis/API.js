import axios from 'axios'

const API = axios.create({
    baseURL:'http://127.0.0.1:8000/api/',
    timeout:10000,
    headers:{
        'Content-Type':'application/json',
    }
})

let get_token = ()=>{
    return localStorage.getItem('authToken')?JSON.parse(localStorage.getItem('authToken')):null
}

API.interceptors.request.use(
    async (config)=>{
        let token = get_token()
        if(token){
            config.headers = {
                ...config.headers,
                'Authorization':`Bearer ${token?.access}`
            }
        }
        return config
    },(error)=>Promise.reject(error)
)

export default API