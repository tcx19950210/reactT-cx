export default {
    method:'post',
    // 基础url前缀
    baseURL:'http://qianxiaohua.cn/cat-application',
    // 请求头信息
    headers:{
        'Content-Type':'application/json;charset=UTF-8'
    },
    //参数
    data:{},
    //设置超时时间
    timeout:1000,
    // 携带证件
    withCredentials:false,
    //返回数据类型
    responseType:'json'
}