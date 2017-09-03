import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import ArticleContent from './content';
import ArticleNavigation from './navigation';
import '../../../css/article/article.css';

export default class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      articleContent: null,
    };
  }

  componentDidMount() {
    const url = `https://api.github.com/repos/axuebin/react-blog/issues/${this.props.match.params.number}`;
    fetch(url).then(response => response.json()).then((data) => {
      const articleContent = <ArticleContent title={data.title} time={data.updated_at} content={data.body} />;
      const articleNavigation = <ArticleNavigation />;
      this.setState({ articleContent, articleNavigation });
    }).catch(e => console.log(e));
  }
  render() {
    return (
      <div className="article">
        <div className="article-container">
          <Row>
            <Col span={18}>{this.state.articleContent}</Col>
            <Col span={6}>{this.state.articleNavigation}</Col>
          </Row>
        </div>
      </div>
    );
  }
}

Article.defaultProps = {
  match: 'match',
};

Article.propTypes = {
  match: PropTypes.object,
};
