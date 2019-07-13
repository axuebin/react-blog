import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import BackTop from '../../components/common/BackTop'
import Hot from '../../components/blogPage/Hot'
import Tags from '../../components/blogPage/Tags'
import Category from '../../components/blogPage/Category'
import { ArchiveItem as ArchiveItemInterface } from '../../components/blogPage/interfaces'
import { getArchive } from '../../api/service';
import { formatMonthDate } from '../../lib/utils'
import styles from './index.module.scss'

interface IState {
  count: Number
  archiveList: ArchiveItemInterface[]
}
interface IProps extends RouteComponentProps {
}

class ArchivePage extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
      archiveList: [],
    }
  }
  componentDidMount() {
    getArchive().then(res => {
      if (res.success) {
        const { count, data } = res.data
        this.setState({
          count,
          archiveList: data
        })
      }
    });
  }
  onClickItem = (_id: string) => {
    this.props.history.push(`/blog/detail?_id=${_id}`)
  }
  render() {
    const { archiveList } = this.state
    return (
      <div className={styles.archivePage}>
        <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.archive}>
            {
              archiveList.map((year: any) => {
                return <div className={styles.year} key={year._id} >
                  <div className={styles.title}>{year._id}年</div>
                  <div className={styles.list}>
                    {
                      year.list.map((item: ArchiveItemInterface) => {
                        return <div key={item._id} className={styles.item} onClick={() => {this.onClickItem(item._id)}}>
                          <span className={styles.date}>{formatMonthDate(item.createdDate)}: </span>
                          <span className={styles.title}>{item.title}</span>
                        </div>
                      })
                    }
                  </div>
                </div>
              })
            }
          </div>
        </div>
        <div className={styles.right}>
          <Hot></Hot>
          <Category></Category>
          <Tags></Tags>
        </div>
        </div>
        <BackTop></BackTop>
      </div>
    );
  }
}

export default withRouter(ArchivePage);