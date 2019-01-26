import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import PostIndexForm from './post_index_form';
import { removeErrors } from '../../actions/session_actions';
import { createPost } from '../../actions/post_actions';
import { fetchPosts } from '../../actions/post_actions';

const msp = (state) => {
  return {
    posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
  };
};

const mdp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: (post) => dispatch(createPost(post))
  };
};

export default connect(msp, mdp)(PostIndexForm);