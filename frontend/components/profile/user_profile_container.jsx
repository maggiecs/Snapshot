import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const { entities: { users, posts } } = state;
  const user = users[ownProps.match.params.id] || {};
  return {
    user: user,
    posts: posts
  };

};

const mdp = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
    openModal: (postId) => dispatch(openModal("post", postId))
  };
};

export default connect(msp, mdp)(UserProfile);