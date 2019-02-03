import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexForm from './post_index_form';
import { removeErrors } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import { createPostLike, deletePostLike } from '../../actions/like_actions';

const msp = (state) => {
  return {
    users: state.entities.users,
    posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id]),
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createPostLike: (like) => dispatch(createPostLike(like)),
    deletePostLike: (userId, postId) => dispatch(deletePostLike(userId, postId))
  };
};

export default connect(msp, mdp)(PostIndexForm);
