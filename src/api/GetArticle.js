/*
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-17 08:08:10
 * @LastEditTime: 2024-12-30 19:33:10
 */
import request from '@/request/RequestIndex'


export function getTopSearchNews() {
  return request({
    url: 'http://54.169.143.126:8080/api/topSearchNews/getAllNews',
    method: 'get'
  })
}
export function getCnBlogNews(page,size){
  return request({
    url:'http://54.169.143.126:8080/api/cnBlogNews/getAllNews',
    method:'get',
    params:{
      page:page,
      size:size
    }
  })
}