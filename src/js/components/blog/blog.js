import React from 'react';
import { Row, Col } from 'antd';
import ArticleArea from './articlearea';
import RightSider from './rightsider';
import '../../../css/blog/blog.css';

export default class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <div className="blog-container">
          <Row>
            <Col span={18}><ArticleArea /></Col>
            <Col span={6}><RightSider /></Col>
          </Row>
        </div>
      </div>
    );
  }
}
