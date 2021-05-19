import * as React from 'react';
import { connect } from 'react-redux';
import Planner from './Planner/Planner';

const Home: React.FunctionComponent = () => (
  <Planner />
);

export default connect()(Home);
