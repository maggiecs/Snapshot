import { connect } from 'react-redux';
import Post from './post';
import { fetchPost, deletePost, updatePost } from '../../actions/post_actions';
import { createPostLike, deletePostLike } from '../../actions/like_actions';
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
    createPostLike: (like) => dispatch(createPostLike(like)),
    deletePostLike: (userId, postId) => dispatch(deletePostLike(userId, postId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Post);