import axios from "axios";
axios.defaults.baseURL = 'https://api.github.com'
axios.interceptors.request.use((config )=> {
    const token = localStorage.getItem('token')
    if (token){
        config.headers['Authorization']=`Bearer ${token}`
    }
    config.headers['x-requested-with']='XMLHttpRequest'
    return config
})

export default axios
