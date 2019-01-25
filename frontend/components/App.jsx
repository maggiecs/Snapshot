import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashFormContainer from './session_form/splash_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileFormContainer from './profile/profile_container';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <ProtectedRoute path="/accounts/edit" component={ProfileFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashFormContainer} />
    </Switch>
  </div>
);

export default App;