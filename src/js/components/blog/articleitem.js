import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArticleLabel from './articlelabel';
import '../../../css/blog/articlearea.css';

export default class ArticleItem extends React.Component {
  render() {
    const labelList = this.props.labels.map((item) => {
      if (item.name !== 'blog') {
        return <ArticleLabel key={item.id} id={item.id} name={item.name} color={item.color} />;
      }
      return null;
    });
    const time = this.props.time;
    return (
      <div className="blog-article-item">
        <div className="blog-article-item-title">
          <Link to={`/blog/${this.props.number}`}>{this.props.title}</Link>
        </div>
        <div className="blog-article-item-time">{time}</div>
        <div className="blog-article-item-label">{labelList}</div>
        <div className="blog-article-item-desc">
          <p>{this.props.desc.split('----')[0]}</p>
        </div>
      </div>
    );
  }
}

ArticleItem.defaultProps = {
  number: 'number',
  title: 'title',
  labels: 'label',
  time: 'time',
  desc: 'desc',
};

ArticleItem.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  labels: PropTypes.array,
  time: PropTypes.string,
  desc: PropTypes.string,
};
