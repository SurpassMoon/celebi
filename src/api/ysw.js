import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://localhost:3000/test/2',
    method: 'get',
    params
  })
}
