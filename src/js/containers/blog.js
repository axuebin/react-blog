import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import BlogIndex from '../components/blog/blogindex';
import Article from './article';
import '../../css/blog/blog.css';

export default class Blog extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return (
      <div ref={node => this.node = node} >
        <Route exact path={`${this.props.match.url}/`} component={BlogIndex} />
        <Route path={`${this.props.match.url}/:number`} component={Article} />
      </div>
    );
  }
}

Blog.defaultProps = {
  match: null,
  url: 'url',
};

Blog.propTypes = {
  match: PropTypes.object,
  url: PropTypes.string,
};
