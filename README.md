# React-Blog

学习React全家桶，计划写一个博客。

边学边写边思考。。。


### TodoList

* [ ] 首页
* [ ] 博客首页
* [ ] 关于我

### 问题汇总

- React-router的Link和Route需要嵌套在同一个Router底下？
- 刷新页面出现`Cannot GET /`提示，路由未生效。
   - 由于刷新之后，会根据URL对服务器发送请求，而不是处理路由，导致出现`Cannot GET /`错误。
   - 通过修改`<Router>`→`<HashRouter>`。
   - `<HashRouter>`借助URL上的哈希值（hash）来实现路由。可以在不需要全屏刷新的情况下，达到切换页面的目的。