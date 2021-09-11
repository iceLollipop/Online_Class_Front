import axios from "axios";

const service = axios.create({
    // 基础路径
    baseURL:"http://127.0.0.1:8090",

    // 请求超时时间 5秒
    timeout:5000
})

export default service
