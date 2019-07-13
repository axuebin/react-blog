import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import IndexPage from './routes/indexPage/index'
import BlogPage from './routes/blogPage/index'
import ArchivePage from './routes/archivePage/index'
import DetailPage from './routes/detailPage/index'
import NoMatch from './routes/404'
import CommonHeader from './components/common/Header'

function App() {
  return (
    <Router>
      <CommonHeader></CommonHeader>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/blog" exact component={BlogPage}/>
        <Route path="/archive" component={ArchivePage}/>
        <Route path="/blog/detail" component={DetailPage}/>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App
