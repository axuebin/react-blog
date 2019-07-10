import * as React from 'react'
import Card from '../Card'
import { ArticleItem as ArticleInterface } from '../interfaces'
import { getHotArticleList } from '../../../api/service'
import styles from './index.module.scss'

interface IState {
  articleList: ArticleInterface[]
}
interface IProps {
}
class Hot extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      articleList: [],
    }
  }
  componentDidMount() {
    getHotArticleList().then(res => {
      if (res.success && res.data) {
        this.setState({
          articleList: res.data,
        })
      }
    })
  }
  onClickItem(_id: string) {
    console.log(_id)
  }
  render() {
    const { onClickItem } = this
    const articleList = this.state.articleList
    return (
      <div className={styles.hot}>
        <Card title="热门文章">
            <div className={styles.articleList}>
              {
                articleList.map((article: ArticleInterface) => (
                  <div key={article._id} 
                    onClick={() => {onClickItem(article._id)}}
                    className={styles.article}>{article.title}</div>
                ))
              }
            </div>
        </Card>
      </div>
    );
  }
}

export default Hot