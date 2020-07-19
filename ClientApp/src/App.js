import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Stocks } from './components/Stock/Stocks';
import { Create } from './components/Stock/Create';
import { Update } from './components/Stock/Update';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={Create} />
        <Route path='/stocks' component={Stocks} />
        <Route path='/update/:id' component={Update} />
      </Layout>
    );
  }
}
