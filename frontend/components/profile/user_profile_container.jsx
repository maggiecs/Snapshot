import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  const { session, entities: { users, posts } } = state;
  const user = users[ownProps.match.params.id] || {};
  return {
    user: user,
    posts: posts,
    currentUser: users[session.id]
  };
};

const mdp = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
    openPostModal: (postId) => dispatch(openModal("post", postId)),
    openFollowerModal: () => dispatch(openModal("follower")),
    openFollowingModal: () => dispatch(openModal("following")),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (currentUserId, userId) => dispatch(deleteFollow(currentUserId, userId)),
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(UserProfile);