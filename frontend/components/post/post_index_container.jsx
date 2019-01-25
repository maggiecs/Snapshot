import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import PostIndexForm from './post_index_form';
import { removeErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
  };
};

const mdp = dispatch => {
  return {
    createPosts: () => dispatch(createPosts())
    // removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(null, mdp)(PostIndexForm);