import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../../css/blog/articlearea.css';

export default class ArticleLabel extends React.Component {
  render() {
    const style = {
      backgroundColor: this.props.color,
    };
    return (
      <div className="blog-article-label" style={style}>
        <Link to={`/blog/label/${this.props.id}`}>{this.props.name}</Link>
      </div>
    );
  }
}

ArticleLabel.defaultProps = {
  id: 'id',
  name: 'name',
  color: 'blue',
};

ArticleLabel.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
};
