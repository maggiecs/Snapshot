import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashFormContainer from './session_form/splash_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfileFormContainer from './profile/edit_profile_container';
import NavBarContainer from './nav_bar/nav_bar_container';
// import PostIndexContainer from './post/post_index_container';
import ExploreContainer from './post/explore_container';
import UploadContainer from './profile/upload_container';
import MainProfileContainer from './profile/main_profile_container';
import UserProfileContainer from './profile/user_profile_container';
import EditPostFormContainer from './post/edit_post_container';
import FeedIndexContainer from './post/feed_index_container';

import Modal from './modal/modal';
const App = () => (
  <div>
    <header>
    </header>
    <ProtectedRoute component={NavBarContainer} />
    <Switch>
      <ProtectedRoute exact path="/accounts/edit" component={ProfileFormContainer} />
      <ProtectedRoute exact path="/explore" component={ExploreContainer} />
      <ProtectedRoute exact path="/feed" component={FeedIndexContainer} />
      <ProtectedRoute exact path="/upload" component={UploadContainer} />
      <ProtectedRoute exact path="/profile" component={MainProfileContainer} />
      <ProtectedRoute exact path="/users/:id" component={UserProfileContainer} />
      <ProtectedRoute exact path="/posts/:id/edit" component={EditPostFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/" component={SplashFormContainer} />
    </Switch>
    <Modal />
  </div>
);

export default App;