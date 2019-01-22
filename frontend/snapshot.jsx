//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
// import Root from './components/root';
// import configureStore from './store/store';
//TESTING (DELETE EVENTUALLY)
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    // store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    // store = configureStore();
  }

  window.login = login;
  window.signup = signup;
  window.logout = logout;
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Snapshot!</h1>, root);
  // ReactDOM.render(<Root store={store} />, root);
});