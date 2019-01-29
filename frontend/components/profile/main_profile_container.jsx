import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainProfile from './main_profile';
import { fetchUserPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
const msp = (state) => {
  const { session, entities: { users, posts } } = state;
  const currentUser = users[session.id];
  // if (currentUser.posts) {
  //   posts = Object.keys(currentUser.posts);
  // }

  return {
    currentUser: currentUser,
    posts: posts
  };
};

const mdp = dispatch => {
  return {
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
    logout: () => dispatch(logout()),
    openModal: (postId) => dispatch(openModal("post", postId))
  };
};

export default connect(msp, mdp)(MainProfile);