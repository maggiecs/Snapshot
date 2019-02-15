import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserProfile from './user_profile';
import { fetchUserPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = (state) => {
  const { session, entities: { users, posts } } = state;
  const currentUser = users[session.id];

  return {
    user: currentUser,
    currentUser: currentUser,
    posts: posts
  };
};

const mdp = dispatch => {
  return {
    // fetchUser: (userId) => dispatch(fetchUser(userId)),ß
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
    logout: () => dispatch(logout()),
    openPostModal: (postId) => dispatch(openModal("post", postId)),
    openFollowerModal: () => dispatch(openModal("follower")),
    openFollowingModal: () => dispatch(openModal("following")),
  };
};

export default connect(msp, mdp)(UserProfile);
