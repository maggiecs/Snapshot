import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { removeErrors } from '../../actions/session_actions';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Log in",
    altLink: <Link to="/signup">Sign Up</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    loginForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(SessionForm);