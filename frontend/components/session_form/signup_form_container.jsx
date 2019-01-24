import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { removeErrors } from '../../actions/session_actions';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign up",
    altLink: <Link to="/login">Log in</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    loginForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(SessionForm);