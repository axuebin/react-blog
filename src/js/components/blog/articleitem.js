import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { COLOR_BLOG_CATEGORY, COLOR_LABEL_CATEGORY } from '../../constants/config';
import ArticleLabel from './articlelabel';

export default class ArticleItem extends React.Component {
  render() {
    const category = [];
    const labelList = [];
    for (let i = 0; i < this.props.labels.length; i += 1) {
      const item = this.props.labels[i];
      if (item.color === COLOR_LABEL_CATEGORY) {
        category.push(<ArticleLabel key={item.id} id={item.id} name={item.name} color={item.color} type="category" />);
      } else if (item.color !== COLOR_BLOG_CATEGORY) {
        labelList.push(<ArticleLabel key={item.id} id={item.id} name={item.name} color={item.color} type="tag" />);
      }
    }
    const time = this.props.time.split('T')[0];
    return (
      <div className="blog-article-item">
        <div className="blog-article-item-title">
          <Link to={`/blog/article/${this.props.number}`}>{this.props.title}</Link>
        </div>
        <div className="blog-article-item-time"><Icon type="calendar" /> {time}</div>
        <div className="blog-article-item-label"><Icon type="bars" /> {category}<Icon type="tag-o" /> {labelList}</div>
        <div className="blog-article-item-desc">
          <p>
            {this.props.desc.split('----')[0]}
            <span className="blog-article-item-desc-more"><Link to={`/blog/article/${this.props.number}`}>Learn more...</Link></span>
          </p>
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
