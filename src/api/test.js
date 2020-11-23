import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://192.168.31.73:3000/test/11',
    method: 'get',
    params
  })
}
