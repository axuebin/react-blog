import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { ArticleItem as ArticleInterface } from '../interfaces'
import ArticleItem from '../ArticleItem'
import { getArticleList } from '../../../api/service'
import styles from './index.module.scss'

interface IState {
  articleList: ArticleInterface[]
  page: number
  pageSize: number
}
interface IProps extends RouteComponentProps {
}

class ArticleList extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      articleList: [],
      page: 0,
      pageSize: 5,
    }
  }
  componentDidMount() {
    const { page, pageSize } = this.state
    getArticleList({
      page,
      pageSize
    }).then(res => {
      if (res.success && res.data && Object.keys(res.data).length > 0) {
        const { data } = res.data;
        this.setState({
          articleList: data,
        })
      }
    })
  }
  render() {
    const { history } = this.props
    const articleList = this.state.articleList
    return (
      <div className={styles.articleList}>
        {
          articleList.map((article: ArticleInterface) => (
              <ArticleItem key={article._id}
                article={article}
                history={history}
              ></ArticleItem>
            )
          )
        }
      </div>
    );
  }
}

export default withRouter(ArticleList)