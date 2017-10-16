import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';
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
    this.node.scrollIntoView();
    const url = `https://api.github.com/repos/axuebin/articles/issues/${this.props.match.params.number}`;
    axios.get(url).then((response) => {
      const data = response.data;
      const articleContent = <ArticleContent number={data.number} title={data.title} time={data.updated_at} content={data.body} />;
      const articleNavigation = <ArticleNavigation content={data.body} />;
      this.setState({ articleContent, articleNavigation });
    }).catch(e => console.log(e));
  }
  render() {
    return (
      <div className="main" ref={node => this.node = node} >
        <div className="main-container">
          <Row>
            <Col xs={24} sm={24} md={18}>{this.state.articleContent}</Col>
            <Col xs={0} sm={0} md={6}>{this.state.articleNavigation}</Col>
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
