# 微信小程序－乐词

### 说明：

实现背单词相关功能，主要实现了：
- 一、刚打开小程序的时候有一个弹窗：显示已经学习单词xx天了； 
- 二、首页“学词”：全是静态的，没有交互效果； 
- 三、第二页“乐学”：上部swiper轮播图，下面的课程是ajax获取的，支持上拉加载，间隔1s；点击课程会图片会进入详情页，详情页下部有一个跟随导航的swiper； 
- 四、第三页“发现”：上部swiper轮播图，其余静态；点击单词查询，进入查单词详情页，支持在线查询（是真的查单词），通过ajax在海词网上得到input输入的词汇， 获取到单词意思并显示，单词输入不正确的话显示“您查找的单词拼写有误”信息； 
- 五、第四页“我”：获取用户微信信息作为游客模式登陆，点击微信头像进行登陆，并存储登陆名信息，将登录名显示在原微信名处。

### 数据接口:

- https://api.getweapp.com/thirdparty/leci/loadmore
- https://api.getweapp.com/thirdparty/leci/tuijian

### 目录结构：

- images — 存放项目图片文件
- pages — 存放项目页面渲染相关文件
- tpls — 存放复用模板文件
- utils — 存放日期格式化文件

### 开发环境：

微信web开发者工具 v0.11.112200

### 项目截图：

https://www.getweapp.com/project?projectId=583423efbb2538f8186c7095

### 感谢:

本项目原始版本由chinawzc提供：https://github.com/chinawzc/wechat_leci