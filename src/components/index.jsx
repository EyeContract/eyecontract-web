import React from 'react';
import * as Styled from './styles';
import Navbar from './common/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routes from './routes';
import UploadModal from './common/uploadModal';
import LoginPage from './login';

const CustomRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Styled.AppWrapper>
      <Navbar />
      <UploadModal/>
      <Component {...props} />
    </Styled.AppWrapper>
  )} />
);

const App = () => (
  <div>
    <Router>
      <Switch>
        {/* <Route path="/" exact component={LoginPage} /> */}

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
