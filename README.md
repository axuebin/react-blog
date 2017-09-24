# React-Blog

学习React全家桶，计划写一个博客。

边学边写边思考。。。


### TodoList

* [x] 静态页面
* [x] 整理目录结构
* [x] Github issus作文章数据源
* [x] react-markdown渲染md
* [x] 代码高亮
* [x] 摘要
* [x] 分类
* [x] 标签
* [x] 翻页功能
* [x] 首页卡片
* [x] Demo页面
* [x] 评论功能（跳转到Github Issues页面。。）
* [ ] 回到顶部
* [ ] Redux管理数据
* [ ] react-router路由
* [ ] 整理代码
* [ ] 渲染优化，打包优化
* [ ] 适配移动端
* [ ] React Native App

### Update Log

|时间|事件|
|:---|:---|
|2017/09/20|1.实现文章内部目录 2.博客页移动端自动隐藏右侧|
|2017/09/18|利用antd实现翻页功能|
|2017/09/17|1.增加类别页 2.修改Demo页 3.整理CSS代码|
|2017/09/11|增加归档页|
|2017/09/09|增加标签列表|
|2017/09/08|每个类别文章数|
|2017/09/07|1.加入Redux作为Github Issues数据的管理 2.增加分类模块|
|2017/09/06|整理项目目录结构|
|2017/09/04|1.修改首页卡片数据源 2.修改文章摘要 3.使用`scrollIntoView()`使页面改变后回到顶部|
|2017/09/03|1.增加文章页面 2.使用`marked`渲染Markdown 3.使用`highlight.js`高亮代码|
|2017/09/02|使用Github Issues作为文章数据源|
|2017/08/31|1.静态页面初步完成 2.使用本地json模拟数据源|
|2017/08/29|React-router V4 作为项目路由|
|2017/08/27|First Blood|

### 问题汇总

- React-router的Link和Route需要嵌套在同一个Router底下？
- 刷新页面出现`Cannot GET /`提示，路由未生效。
   - 由于刷新之后，会根据URL对服务器发送请求，而不是处理路由，导致出现`Cannot GET /`错误。
   - 通过修改`<Router>`→`<HashRouter>`。
   - `<HashRouter>`借助URL上的哈希值（hash）来实现路由。可以在不需要全屏刷新的情况下，达到切换页面的目的。
- 二级路由只改变URL，页面不跳转
- react-markdown不支持表格的渲染
- 路由跳转后页面不会自动回到顶部
   - 使用`scrollIntoView()`，但是不能跳到整个页面的顶部。
- Tag List显示字体大小应该如何计算。（或采用词云来展示？）
- Expected 'this' to be used by class method。建议使用static，但是用了static之后bind会出错。。暂时关闭这个rule。。
- 现在很多模块和css是重复的，需要整理代码。。
- 文章内部目录的实现待优化，暂时也无法实现点击跳转
- 首页渲染优化的问题
- 本来想的在文章底部增加评论框，直接调用Github API创建评论和获取评论列表，但是发现需要登录授权，暂缓
