import React from 'react';
import PropTypes from 'prop-types';

export default class DemoCard extends React.Component {
  render() {
    return (
      <div className="demo-democard">
        <div className="demo-democard-title">{this.props.name}</div>
        <div className="demo-democard-img">
          <img src={this.props.img} alt={this.props.name} />
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
  name: 'name',
  img: 'img',
  demo: 'demo',
  src: 'src',
};

DemoCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  demo: PropTypes.string,
  src: PropTypes.string,
};
