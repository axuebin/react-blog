import React from 'react';
import '../../css/about/about.css';

export default class About extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return (
      <div className="main" ref={node => this.node = node} >
        <div className="main-container about-container">
          <div className="about-detial about-desc">
            <h1>关于我</h1>
            <ul>
              <li>一个正在摸爬滚打的野生程序猿, 有着强烈的学习欲望</li>
              <li>普通高校在读研究生，2018年毕业</li>
              <li>本科学的是电子信息工程专业，有点虚度光阴了，除了拿了几个奖似乎没什么收获</li>
              <li>因心底一直想学习编程相关的，研究生就选择了计算机应用技术专业，从零开始学习计算机</li>
              <li>嗯，现在暂时是那种不懂数据结构、操作系统以及算法的野生程序猿，我会努力弥补这些不足</li>
              <li>喜欢看书和实践，喜欢旅游和运动</li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-contact">
            <h1>联系我</h1>
            <ul>
              <li>个人主页：<a target="_blank" rel="noopener noreferrer" href="http://axuebin.com">http://axuebin.com</a></li>
              <li>Github：<a target="_blank" rel="noopener noreferrer" href="https://github.com/axuebin">https://github.com/axuebin</a></li>
              <li>Email： xb@axuebin.com</li>
              <li>微信：xb9207</li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-friend">
            <h1>友情链接</h1>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://phodal.com">Phodal</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="http://sundway.me">Sundway</a></li>
            </ul>
          </div>
          <hr />
          <div className="about-detial about-简历">
            <h1>我的简历</h1>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="http://axuebin.com/cv/xuebin-Resume.pdf">前端开发工程师</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
