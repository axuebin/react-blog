import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { ArticleItem as ArticleInterface } from '../interfaces'
import ArticleItem from '../ArticleItem'
import styles from './index.module.scss'

interface IState {
  articleList: ArticleInterface[]
}
interface IProps extends RouteComponentProps {
}

const articleList: ArticleInterface[] = [{
  id: 1,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
}, {
  id: 2,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
  banner: 'https://51nbimg.u51.com/41b8b086d4684836b08535699e400ee1.jpeg',
}, {
  id: 3,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
}, {
  id: 4,
  title: '原生 JavaScript 实现浅拷贝和深拷贝',
  content: '原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝原生 JavaScript 实现浅拷贝和深拷贝',
  author: 'axuebin',
  createDate: '2019年7月9日 16:00:00',
  category: '前端',
  tags: ['JavaScript', '前端', 'ES6'],
}]

class ArticleList extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      articleList: [],
    }
  }
  componentDidMount() {
    this.setState({
      articleList,
    })
  }
  render() {
    const { history } = this.props
    const articleList = this.state.articleList
    return (
      <div className={styles.articleList}>
        {
          articleList.map((article: ArticleInterface) => (
              <ArticleItem key={article.id}
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