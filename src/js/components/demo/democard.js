import React from 'react';
import PropTypes from 'prop-types';

export default class DemoCard extends React.Component {
  render() {
    return (
      <div className="demo-democard">
        <div className="demo-democard-title"><a target="_blank" rel="noopener noreferrer" href={this.props.url}>{this.props.name}</a></div>
        <div className="demo-democard-img">
          <img src={this.props.img} alt="TodoList" />
        </div>
        <div className="demo-democard-desc">
          <a target="_blank" rel="noopener noreferrer" href={this.props.demo}>演示地址</a>
          <a target="_blank" rel="noopener noreferrer" href={this.props.src}>源代码</a>
        </div>
      </div>
    );
  }
}

DemoCard.defaultProps = {
  url: 'url',
  name: 'name',
  img: 'img',
  demo: 'demo',
  src: 'src',
};

DemoCard.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  demo: PropTypes.string,
  src: PropTypes.string,
};
