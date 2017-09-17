import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ArticleLabel extends React.Component {
  render() {
    const style = {
      backgroundColor: this.props.color,
    };
    return (
      <div className="blog-article-label" style={style}>
        <Link to={`/blog/${this.props.type}/${this.props.name}`}>{this.props.name}</Link>
      </div>
    );
  }
}

ArticleLabel.defaultProps = {
  type: 'category',
  name: '前端',
  color: 'blue',
};

ArticleLabel.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
};
