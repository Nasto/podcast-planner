import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import AddSession from './components/AddSession/AddSession';

import './custom.scss';

const App: React.FunctionComponent = () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/AddSession" component={AddSession} />
  </Layout>
);

export default App;
