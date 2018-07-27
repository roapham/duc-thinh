import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import CreateLink from './CreateLink';
import LinkList from './LinkList';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default compose()(App);
