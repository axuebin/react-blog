import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../../css/blog/articlearea.css';

export default class ArticleItem extends React.Component {
  render() {
    return (
      <div className="blog-article-item">
        <div className="blog-article-item-title"><Link to={this.props.url}>{this.props.title}</Link></div>
        <div className="blog-article-item-label">{this.props.time}</div>
        <div className="blog-article-item-desc"><p>{this.props.desc}</p></div>
      </div>
    );
  }
}


ArticleItem.defaultProps = {
  url: 'url',
  title: 'title',
  time: 'time',
  desc: 'desc',
};

ArticleItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  desc: PropTypes.string,
};
