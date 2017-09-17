import React from 'react';
import '../../../css/home/homebanner.css';

export default class HomeBanner extends React.Component {
  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-me">
          <div className="home-banner-photo">
            <img src="./src/img/touxiang.jpg" alt="头像" />
          </div>
          <div className="home-banner-desc">
            <h1>薛彬</h1>
            <p>一个正在努力的程序猿及摄影爱好者</p>
            <p>分享编码和摄影</p>
            <div className="home-banner-link">
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/axuebin">Github</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="http://axuebin.com/cv">在线简历</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://axuebin.tuchong.com">图虫</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
