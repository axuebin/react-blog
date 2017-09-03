import React from 'react';
import { Row, Col } from 'antd';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArticleArea from './articlearea';
import RightSider from './rightsider';
import Article from '../article/article';
import '../../../css/blog/blog.css';

const BlogIndex = () => (
  <div className="blog">
    <div className="blog-container">
      <Row>
        <Col span={18}><ArticleArea /></Col>
        <Col span={6}><RightSider /></Col>
      </Row>
    </div>
  </div>
);

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.url}/`} component={BlogIndex} />
        <Route path={`${this.props.match.url}/:number`} component={Article} />
      </div>
    );
  }
}

Blog.defaultProps = {
  match: 'match',
  url: 'url',
};

Blog.propTypes = {
  match: PropTypes.object,
  url: PropTypes.string,
};
