import { connect } from 'react-redux';
import React from 'react';
import Post from './post';
import { fetchPost, deletePost, updatePost } from '../../actions/post_actions';
// import { fetchComments } from '../../actions/comment_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  const post = state.entities.posts[state.ui.displayPost];
  const comments = Object.values(state.entities.comments);
  const users = state.entities.users;

  let user = {};
  if (post) {
    user = state.entities.users[post.author_id];
  }
  const currentUser = state.entities.users[state.session.id];

  return {
    currentUser: currentUser,
    user: user,
    users: users,
    post: post,
    postId: state.ui.displayPost,
    comments: comments
  };
};

const mdp = dispatch => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
    deletePost: (id, userId) => dispatch(deletePost(id, userId)),
    updatePost: (id) => dispatch(updatePost(id)),
    // fetchComments: (postId) => dispatch(fetchComments(postId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Post);