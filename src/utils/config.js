const config = {
  rapHost:'http://rap.taobao.org/mockjs/5889/', //rap的地址
  rapFlag:false, //是不是rap的mock请求，若不是则请求真实的地址
  onlinePath:'/api/'  //加载真实地址前的前缀，例如请求真实接口/about时实际会请求/api/about，这样是为了方便配置nginx反向代理时候进行路由匹配
}
export default config