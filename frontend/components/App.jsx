import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashFormContainer from './session_form/splash_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileFormContainer from './profile/edit_profile_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import PostIndexContainer from './post/post_index_container';
import UploadContainer from './profile/upload_container';
import MainProfileContainer from './profile/main_profile_container';
import UserProfileContainer from './profile/user_profile_container';
import Modal from './modal/modal';
const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <ProtectedRoute component={NavBarContainer} />
    <Switch>
      <ProtectedRoute exact path="/accounts/edit" component={ProfileFormContainer} />
      <ProtectedRoute exact path="/feed" component={PostIndexContainer} />
      <ProtectedRoute exact path="/upload" component={UploadContainer} />
      <ProtectedRoute exact path="/profile" component={MainProfileContainer} />
      <ProtectedRoute exact path="/users/:id" component={UserProfileContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashFormContainer} />
    </Switch>
    <Modal />
  </div>
);

export default App;