import React from 'react';
import * as Styled from './styles';
import Navbar from './common/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routes from './routes';

const CustomRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Styled.AppWrapper>
      <Navbar />
      <Component {...props} />
    </Styled.AppWrapper>
  )} />
);

const App = () => (
  <div>
    <Router>
      <Switch>
        {
          Routes.map((route, i) => (
            <CustomRoute key={i} path={route.path} exact component={route.component} />
          ))
        }
      </Switch>
    </Router>
  </div>
);

export default App;
