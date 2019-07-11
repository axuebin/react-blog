import * as React from 'react'
import Card from '../Card'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { getCategory } from '../../../api/service';
import { Category as CategoryInterface } from '../interfaces'
import styles from './index.module.scss'

interface IState {
  categoryList: CategoryInterface[]
  categoryCount: number
}
interface IProps extends RouteComponentProps {
}

class Category extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      categoryList: [],
      categoryCount: 0
    }
  }
  componentDidMount() {
    getCategory().then(res => {
      if (res.success && res.data && Object.keys(res.data).length > 0) {
        const { data, count } = res.data
        this.setState({
          categoryList: data.sort((a: CategoryInterface, b: CategoryInterface) => b.count - a.count),
          categoryCount: count || 0,
        })
      }
    })
  }
  onClickItem = (category: string) => {
    const { history } = this.props
    history.push(`/blog?category=${encodeURIComponent(category)}`)
  }
  render() {
    const { onClickItem } = this
    const { categoryList, categoryCount } = this.state
    return (
      <div className={styles.categorys}>
        <Card title="分类">
            <div className={styles.categoryList}>
              {
                categoryList.map((category: CategoryInterface, index: number) => (
                  <div key={index} 
                    onClick={() => {onClickItem(category.category)}}
                    className={styles.category}>{category.category}({category.count})</div>
                ))
              }
            </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(Category)