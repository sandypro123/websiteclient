/*
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-17 08:08:10
 * @LastEditTime: 2025-04-24 08:34:05
 */
/*
 * @Descripttion: 
 * @Author: Sandy
 * @Date: 2024-11-17 08:08:10
 * @LastEditTime: 2025-01-08 20:35:30
 */
import request from '@/request/RequestIndex'


export function getTopSearchNews() {
  return request({
    url: '/api/topSearchNews/getAllNews',
    method: 'get'
  })
}
export function getCnBlogNews(page,size){
  return request({
    url: '/api/cnBlogNews/getAllNews',
    method:'get',
    params:{
      page:page,
      size:size
    }
  })
}
export function getNews(page,size){
  return request({
    url: '/api/news/getAllNews',
    method:'get',
    params:{
      page:page,
      size:size
    }
  })
}
export function getNewsDetail(link) {
  return request({
    url: '/api/news/getNewsDetail',
    method: 'get',
    params: {
      link: link 
    }
  })
}