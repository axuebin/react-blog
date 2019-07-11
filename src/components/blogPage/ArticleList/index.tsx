import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { ArticleItem as ArticleInterface } from '../interfaces'
import { BlogListReqInterface } from '../../../api/interfaces'
import ArticleItem from '../ArticleItem'
import { getArticleList } from '../../../api/service'
import { qs } from '../../../lib/utils'
import styles from './index.module.scss'

interface IState {
  articleList: ArticleInterface[]
  page: number
  pageSize: number
  count: number
  moreLock: boolean
  category?: string
  tag?: string
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
      count: 0,
      moreLock: false,
      category: '',
      tag: ''
    }
  }
  init({ page, pageSize, category, tag }: BlogListReqInterface) {
    getArticleList({
      page,
      pageSize,
      category,
      tag,
    }).then(res => {
      if (res.success && res.data && Object.keys(res.data).length > 0) {
        const { count, data } = res.data;
        this.setState({
          count,
          articleList: data,
          category,
          tag,
        })
      }
    })
  }
  more() {
    const { page, pageSize, articleList, moreLock, category, tag } = this.state
    const nextPage = page + 1
    if (!moreLock) {
      this.setState({ moreLock: true })
      getArticleList({
        page: nextPage,
        pageSize,
        category,
        tag,
      }).then(res => {
        if (res.success && res.data && Object.keys(res.data).length > 0) {
          const { count, data } = res.data;
          const temp = articleList.concat(data)
          this.setState({
            count,
            articleList: temp,
            page: nextPage,
            moreLock: false
          })
        }
      }).catch(() => {
        this.setState({ moreLock: false })
      })
    }
  }
  componentDidMount() {
    const { page, pageSize } = this.state
    this.init({ page, pageSize })
  }
  componentDidUpdate() {
    const urlQuery = qs()
    const query: BlogListReqInterface = {
      page: 0,
      pageSize: 5,
    }
    const { category, tag } = this.state
    if (urlQuery.category !== category) {
      query.category = urlQuery.category;
      return this.init(query)
    }
    if (urlQuery.tag !== tag) {
      query.tag = urlQuery.tag;
      return this.init(query)
    }
  }
  render() {
    const { history } = this.props
    const { articleList, count } = this.state
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
        {
          articleList.length < count ? 
          <div className={styles.more} onClick={() => this.more()}>
            <div className={styles.text}>查看更多</div>
          </div>
          : <div className={styles.nomore}>没有更多了，我会继续加油哒~</div>
        }
      </div>
    );
  }
}

export default withRouter(ArticleList)