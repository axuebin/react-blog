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
  componentWillMount() {
    const url = 'https://api.github.com/repos/axuebin/react-blog/issues?creator=axuebin';
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const articlelist = data.map(item => <ArticleItem key={item.id} id={item.id} number={item.number} title={item.title} labels={item.labels} time={item.updated_at} desc={item.body} />);
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
