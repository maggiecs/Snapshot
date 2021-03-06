import { connect } from 'react-redux';
import PostIndexForm from './post_index_form';
import { fetchPosts, clearPrevPosts } from '../../actions/post_actions';
import { createPostLike, deletePostLike } from '../../actions/like_actions';

const msp = (state) => {
  return {
    users: state.entities.users,
    posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id]),
    currentUser: state.entities.users[state.session.id],
    feed: true,
  };
};

const mdp = dispatch => {
  return {
    fetchPosts: (limit, offset, feed) => dispatch(fetchPosts(limit, offset, feed)),
    clearPrevPosts: () => dispatch(clearPrevPosts()),
    createPostLike: (like) => dispatch(createPostLike(like)),
    deletePostLike: (userId, postId) => dispatch(deletePostLike(userId, postId))
  };
};

export default connect(msp, mdp)(PostIndexForm);