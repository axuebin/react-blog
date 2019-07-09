import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './routes/index';
import NoMatch from './routes/404';
import CommonHeader from './components/common/Header';

function App() {
  return (
    <Router>
      <CommonHeader></CommonHeader>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
