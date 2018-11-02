import axios from 'axios'
const p = new Promise(() => '')
p.then(() => '')
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
axios.defaults.timeout = 5000
axios.interceptors.request.use(function (config) {
  return config
})
axios.interceptors.response.use(function (res) {
  return res
})
export default {

}
