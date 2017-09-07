# React-Blog

学习React全家桶，计划写一个博客。

边学边写边思考。。。


### TodoList

* [x] 静态页面
* [x] 整理目录结构
* [ ] Redux管理数据
* [ ] react-router路由
* [x] Github issus作文章数据源
* [x] react-markdown渲染md
* [x] 代码高亮
* [x] 摘要
* [ ] 回到顶部
* [x] 分类
* [ ] 标签
* [x] 首页卡片
* [ ] Demo页面


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

### Update Log

- 2017/09/07

 - `[^]` 加入Redux作为Github Issues数据的管理
 - `[^]` 增加分类模块

- 2017/09/06

 - `[^]` 整理项目目录结构

- 2017/09/04

 - `[^]` 修改首页卡片数据源
 - `[^]` 修改文章摘要
 - `[^]` 使用`scrollIntoView()`使页面改变后回到顶部


- 2017/09/03

 - `[+]` 增加文章页面
 - `[+]` 使用`marked`渲染Markdown
 - `[+]` 使用`highlight.js`高亮代码


- 2017/09/02

 - `[^]` 使用Github Issues作为文章数据源


- 2017/08/31

 - `[^]` 静态页面初步完成
 - `[+]` 使用本地json模拟数据源


- 2017/08/29

 - `[+]` React-router V4 作为项目路由


- 2017/08/27

 - `[+]` First Blood
