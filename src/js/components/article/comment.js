import React from 'react';
import { Link } from 'react-router-dom';

export default class Comment extends React.Component {
  render() {
    return (
      <div className="article-comment-box">
        {/* <Link to={`/blog/article/${this.props.number}`}>{this.props.title}</Link> */}
      </div>
    );
  }
}
