import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Card from '../Card'
import { ArticleItem as ArticleInterface } from '../interfaces'
import { getHotArticleList } from '../../../api/service'
import styles from './index.module.scss'

interface State {
  articleList: ArticleInterface[]
}
interface Props extends RouteComponentProps {
}
class Hot extends React.Component<Props, State> {
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
  onClickItem = (_id: string) => {
    this.props.history.push(`/blog/detail?_id=${_id}`)
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
    )
  }
}

export default withRouter(Hot)