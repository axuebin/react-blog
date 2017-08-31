import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../../css/demo/demo.css';

export default class DemoCard extends React.Component {
  render() {
    return (
      <div className="demo-democard">
        <div className="demo-democard-title"><Link to={this.props.url}>Demo Title</Link></div>
        <div className="demo-democard-img">Demo Img</div>
      </div>
    );
  }
}

DemoCard.defaultProps = {
  url: 'Url',
};

DemoCard.propTypes = {
  url: PropTypes.string,
};
