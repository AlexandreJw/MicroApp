# MicroApp
## ==运行==
#### 项目名
去package.json中修改你的项目名（必须）
#### 依赖安装
```
npm install
```
#### 启动

```
npm run start
```
#### 打包

```
npm run build:stag
```


## ====项目说明====
#### 关于项目名
> 修改你项目package.json中name 这个至关重要，后面的子应用打包部署访问径取决于这个，名称小写，-分割，example：zeus-system

#### WEB-INF文件
> WEB-INF tomcat部署重定向文件，禁止删除！！

#### src中的reload文件
> 主应用刷新的中转页，此路由组件禁止删除！！

#### ant-vue使用方式
> utils->registerAntComponent.js 按需注册

```js
import Vue from 'vue'
import {  Button } from 'ant-design-vue';
Vue.use(Button);

```

#### $zeusRouter 的使用
> 通知主应用新开tag

```js
this.$zeusRouter.openView({
    name: '创客详情',
    path: `/guestAccountDetail`, 
    query: {id: recored.id}
})
```