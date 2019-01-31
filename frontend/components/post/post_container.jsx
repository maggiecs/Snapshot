import { connect } from 'react-redux';
import React from 'react';
import Post from './post';
import { fetchPost, deletePost, updatePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  const post = state.entities.posts[state.ui.displayPost];
  let user = {};
  if (post) {
    user = state.entities.users[post.author_id];
  }
  const currentUser = state.entities.users[state.session.id];

  return {
    currentUser: currentUser,
    user: user,
    post: post,
    postId: state.ui.displayPost
  };
};

const mdp = dispatch => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
    deletePost: (id, userId) => dispatch(deletePost(id, userId)),
    updatePost: (id) => dispatch(updatePost(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Post);