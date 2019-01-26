import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import PostIndexForm from './post_index_form';
import { removeErrors } from '../../actions/session_actions';
import { createPost } from '../../actions/post_actions';

const msp = (state) => {
  return {
  };
};

const mdp = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post))
  };
};

export default connect(null, mdp)(PostIndexForm);