import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Main from "../components/Main";
import Search from "../components/children/Search";
import Saved from "../components/children/Saved";
import Home from "../components/children/Home";

const Routes = (props) => (
  <Router {...props}>
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Main>
  </Router>
);

export default Routes;