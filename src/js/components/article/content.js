import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import hljs from 'highlight.js';
// import Comment from './comment';


const Comment = props => (
  <div className="article-comment-box">
    <a target="_blank" rel="noopener noreferrer" href={props.commentUrl}>欢迎点我评论</a>
  </div>
);

export default class ArticleContent extends React.Component {
  componentWillMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value,
    });
  }

  render() {
    const commentUrl = `https://github.com/axuebin/articles/issues/${this.props.number}`;
    return (
      <div className="archive-list-area">
        <div className="archive-list">
          <div className="article-title">
            <h2>{this.props.title}</h2>
          </div>
          <div className="article-time">
            {this.props.time.split('T')[0]}
          </div>
          <div className="article-detail" dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
        </div>
        <Comment commentUrl={commentUrl} />
      </div>
    );
  }
}

ArticleContent.defaultProps = {
  number: 'number',
  title: 'title',
  time: 'time',
  content: 'content',
};

ArticleContent.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string,
  content: PropTypes.string,
};

Comment.defaultProps = {
  commentUrl: 'commentUrl',
};

Comment.propTypes = {
  commentUrl: PropTypes.string,
};
