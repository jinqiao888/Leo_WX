**运行项目说明：**   

* 数据库 :   

```
mongod --dbpath c:\leo\app\mongodb\data\db
```

* leo-wx-backend :  

```
npm run dev
```

* leo-wx-manage :  

```
npm start
```

* leo-wx-backend :  

```
npm run dev:具体环境
```

## 一、项目介绍
**主要目的**：用于管理我的微信公众号“**前端自习课**”的文章内容。   
**主要功能**：   
* 用户端：   

可以使用微信小程序和H5页面能方便获取到我所有文章分类，和列表，也可以筛选；   
可以看到我发布文章的一些数据分析相关的情况；   
还可以看到其他用户自行投稿的文章； 

* 投稿端：   

通过开发的爬虫系统，用户可以自行投稿文章链接，通过审核后将会展示到前端页面上；    
后续可能还有管理已投稿等等，有待想象；    

* 管理员端：

可以在后台选择手动和自动爬取文章信息，并且管理文章；   
可以在后台管理注册用户；   

**主要希望**：   
一方面锻炼自己的前后端和数据库开发能力，另一方面给自己一点动力去做一些有意思的事情。   

## 二、技术栈、功能分布和开发进度    

很多功能后续完善，起步先跑起整个逻辑，这里先列一个大致的方向。   

### 1、前端（Taro）  
项目文件夹： **leo-wx-taro**  

- [ ] 项目主页
- [ ] 文章列表（包括加载更多）    
- [ ] 作者介绍页面  
- [ ] 投稿者注册  
- [ ] 投稿者登录   
- [ ] 投稿入口  
- [ ] 文章分类筛选页面   
- [ ] 文章数据统计页面    

### 2、后台（Ant design）  
项目存放文件夹： **leo-wx-manage**  

- [x] 添加文章——文章保存  
- [x] 添加文章——文章预览   
- [ ] 文章列表——含分页、搜索等
- [x] 文章列表——删除文章  
- [x] 添加管理员——简单逻辑  
- [ ] 添加管理员——检查是否已存在等验证  
- [ ] 注册投稿者   
- [ ] 登录管理员——简单逻辑   
- [ ] 登录管理员——token鉴权 
- [ ] 用户列表——投稿者  

### 3、后端（Eggjs）  
项目存放文件夹： **leo-wx-backend**  

- [x] 接口——添加文章  
- [ ] 接口——删除文章  
- [ ] 帐号——管理员登录操作权限  
- [ ] 帐号——投稿者  
- [x] 爬虫——文章内容爬取（基础版）
- [ ] 爬虫——文章内容爬取（升级加自动化）  

### 4、数据库（Mongoose）
数据库操作逻辑： **leo-wx-backend**  

- [x] 数据库微信文章表的设置——wx_data
- [ ] 数据库用户表的设置——user_data
- [ ] 数据库微信文章投稿暂存表的设置——wx_cache    
- [ ] 文章添加情况日志表的设置——wx_logs   
- [ ] 用户登录日志表的设置——user_logs   
- [ ] 爬虫日志表的设置——spoder_logs    


## 三、感想

这个项目都会在我业余时间来实现，平常上班也挺忙，而且还要学习一些其他新知识，我又是那种不能熬夜的人，哈哈，不过我也会用周末的时间来敲敲敲，本身就是个小菜鸟，还是要多锻炼啦。   
如果您看到这个项目，希望您能为我加加油呀，比心。   


后面是广告，大家可以忽略

----

## 四、广告   
### 关于我
[![博客](http://images.pingan8787.com/icon_my1.png)](http://www.pingan8787.com)
[![知乎](http://images.pingan8787.com/icon_zhihu1.png)](https://zhuanlan.zhihu.com/cute-javascript)
[![掘金](http://images.pingan8787.com/icon_juejin2.png)](https://juejin.im/user/586fc337a22b9d0058807d53/posts)
[![思否](http://images.pingan8787.com/icon_sf1.png)](https://segmentfault.com/blog/pingan8787)
[![CSDN](http://images.pingan8787.com/icon_csdn1.png)](https://blog.csdn.net/qq_36380426)
[![简书](http://images.pingan8787.com/icon_jianshu1.png)](https://www.jianshu.com/u/2ec5d94afd60)

### 一些作品   
#### 1、[Cute-Article](https://github.com/pingan8787/Leo-JavaScript/tree/master/Cute-Article)
精选前端开发的各类文章，设计基础知识，框架知识，网络协议和面试等文章，目前已更新超过七十多篇。    
[前往阅读](https://github.com/pingan8787/Leo-JavaScript/blob/master/Cute-Article/)

#### 2、[Cute-JavaScript](https://github.com/pingan8787/Leo-JavaScript/tree/master/Cute-JavaScript)
1. [Cute-ES](https://github.com/pingan8787/Leo-JavaScript/blob/master/Cute-JavaScript/Cute-ES/)
2. [Cute-JS](https://github.com/pingan8787/Leo-JavaScript/blob/master/Cute-JavaScript/Cute-JS/)
3. [Cute-Patterns](https://github.com/pingan8787/Leo-JavaScript/blob/master/Cute-JavaScript/Cute-Patterns/)
4. [Cute-Regular](https://github.com/pingan8787/Leo-JavaScript/blob/master/Cute-JavaScript/Cute-Regular/)

#### 3、[Cute-Angular](https://github.com/pingan8787/Leo-JavaScript/tree/master/Cute-Angular)
分享Angular开源项目，和自己整理的新手开发教程。  
[前往阅读](https://github.com/pingan8787/Leo-JavaScript/blob/master/Cute-Angular/)  


|Author|王平安|
|---|---|
|E-mail|pingan8787@qq.com|
|博  客|www.pingan8787.com|
|微  信|pingan8787|
|每日文章推荐|https://github.com/pingan8787/Leo_Reading/issues|
|JS小册|js.pingan8787.com|
|微信公众号|前端自习课|


![前端自习课](https://user-gold-cdn.xitu.io/2019/2/16/168f49f0238191ca?w=1078&h=647&f=png&s=282515)