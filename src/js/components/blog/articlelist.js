import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './articleitem';
import '../../../css/blog/articlearea.css';

export default class ArticleList extends React.Component {
  constructor() {
    super();
    this.state = {
      articlelist: null,
    };
  }
  componentWillMount() {
    if (this.props.issues.length > 0) {
      const articlelist = this.props.issues.map(item => <ArticleItem key={item.id} number={item.number} title={item.title} labels={item.labels} time={item.updated_at} desc={item.body} />);
      this.setState({ articlelist });
    }
  }
  render() {
    return (
      <div className="blog-article-list">
        {this.state.articlelist}
      </div>
    );
  }
}

ArticleList.defaultProps = {
  issues: null,
};

ArticleList.propTypes = {
  issues: PropTypes.array,
};
