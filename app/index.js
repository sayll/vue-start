import axios from 'axios'
import { md5 } from 'static/lib/util'

const test = true

// 初始化 axios
const origin = window.location.origin
if ((/rdc\.wdtest\.cc$/).test(origin)) {
  axios.defaults.baseURL = '//rdc.wdtest.cc'
}
else if ((/rdc\.wdai\.com$/).test(origin)) {
  axios.defaults.baseURL = '//rdc.wdai.com'
}
else if ((/rdc\.wdai\.com\.cn$/).test(origin)) {
  axios.defaults.baseURL = '//rdc.wdai.com.cn'
}
else {
  if (test) {
    axios.defaults.baseURL = 'http://192.168.3.228:8080/rdc'
  }
  else {
    axios.defaults.baseURL = 'static/mock'
  }
}

// 配置接口地址
axios.api = {
  getCreditReport: '/credit/getCreditReport',
  getAuthCode: '/credit/getAuthCode',
  login: '/credit/login'
}

// 本地调试添加 json 后缀
if (axios.defaults.baseURL === 'static/mock') {
  const keys = Object.keys(axios.api)
  for (let i = 0, len = keys.length; i < len; i++) {
    axios.api[keys[i]] += '.json'
  }
}

// 配置通用项

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.transformRequest = function (data) {
  const timestamp = new Date().getTime()
  return String(JSON.stringify(Object.assign({
    userId: 'test', // querySearch('id'),
    apikey: md5(`pbccrcIO7Opw${timestamp}`),
    timestamp: timestamp
  }, data)))
}
/* axios.defaults.transformResponse = function (res) {
  const _data = JSON.parse(res)
  if (_data.code === -1) {
    alert2({
      title: '网络错误',
      showConfirmButton: false,
      timer: 2000
    })
  }
  return _data
} */
