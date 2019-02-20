import { connect } from 'react-redux';
import Explore from './explore';
import { fetchPosts, clearPrevPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
    users: state.entities.users,
    user_ids: Object.keys(state.entities.users),
    post_ids: Object.keys(state.entities.posts),
    posts: state.entities.posts,
    currentUser: state.entities.users[state.session.id],
    feed: false,
  };
};

const mdp = dispatch => {
  return {
    fetchUsers: (followee_ids) => dispatch(fetchUsers(followee_ids)),
    fetchPosts: (limit, offset, feed) => dispatch(fetchPosts(limit, offset, feed)),
    clearPrevPosts: () => dispatch(clearPrevPosts()),
    openPostModal: (postId) => dispatch(openModal("post", postId)),
  };
};

export default connect(msp, mdp)(Explore);