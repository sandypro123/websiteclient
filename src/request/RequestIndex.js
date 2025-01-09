/*
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-17 08:15:19
 * @LastEditTime: 2025-01-08 20:48:32
 */
import axios from 'axios'


const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API || '/api',
    timeout: 10000
})



export default service