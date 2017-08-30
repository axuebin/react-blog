import React from 'react';
import ArticleItem from './articleitem';
import '../../../css/blog/articlearea.css';

export default class ArticleList extends React.Component {
  constructor() {
    super();
    this.state = {
      articlelist: null,
    };
  }

  componentDidMount() {
    fetch('./src/js/data/article.json').then(response => response.json()).then((data) => {
      const articlelist = data.map(item => <ArticleItem key={item.id} articleId={item.id} url={item.url} title={item.title} time={item.time} desc={item.desc} />);
      this.setState({ articlelist });
    }).catch(e => console.log(e));
  }
  render() {
    return (
      <div className="blog-article-list">
        {this.state.articlelist}
      </div>
    );
  }
}
