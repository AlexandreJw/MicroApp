
import axios from 'axios'
import {Message} from 'ant-design-vue'
import Cookies from 'js-cookie';
//2、创建axios的实例
let httpService = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
    timeout:10000
})
//3、axios的拦截--request
httpService.interceptors.request.use(config => {
    // 请求成功处理
    config.headers.Authorization = `Bearer ${Cookies.get('token')}`
    return config;
},err => {
    Promise.reject(err);// 请求错误处理
})

//4、axios的拦截--response
httpService.interceptors.response.use(response => {
	// TODO:具体的code对应的处理可继续添加修改
    if(response.data.code === '200'){
        console.log('请求成功')
    }
    if(response.data.code === '500'){
        Message.error(response.data.msg || '请求失败请稍后重试!');
    }
    if(response.data.code === '401' || response.data.code === '402'){
        Message.error('登录过期');
         //登录过期跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 ---主页(index) 或者 退出到登录前的浏览的页面  
        //这样登录页面登录接口成功之后可以进行跳转 主页(index) 或者 退出到登录前的页面： let path = this.$route.query.redirect || '/index.js';   this.$router.push(path);
        setTimeout(() => {
            window.location.href = process.env.VUE_APP_SSO;
        }, 1000);
        localStorage.setItem('token','');//清除token
    }
    return response.data;
},err => {
	// TODO:具体的code对应的处理可继续添加修改
    if(err.response.code === 401){
        console.log('登录过期');
         //登录过期跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 ---主页(index) 或者 退出到登录前的浏览的页面  
        //这样登录页面登录接口成功之后可以进行跳转 主页(index) 或者 退出到登录前的页面： let path = this.$route.query.redirect || '/index.js';   this.$router.push(path);
        setTimeout(() => {
        //   this.$router.replace({
        //     path: '/login',
        //     query: {
        //       redirect: this.$router.currentRoute.fullPath
        //     }
        //   });
        window.href= process.env.VUE_APP_SSO;
        }, 1000);
        localStorage.setItem('token','');//清除token
    }
    if(err.response.code === 500){
        console.log('请联系管理员');
    }
    return Promise.reject(err);
})

//5、get请求的封装
export function get(url,params={}){
    return  httpService({
        url:url,
        method:'get',
        params,
    })
}

//6、post请求封装  默认json格式:'Content-Type':'application/json',如果是文件上传，可以修改headers为 headers: { 'Content-Type': 'multipart/form-data' }
export function post(url,data={},headers={'Content-Type':'application/json'}){
    return httpService({
        url:url,
        method:'post',
        data,
        headers,
    })
}