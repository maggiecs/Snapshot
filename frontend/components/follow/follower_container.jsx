import { connect } from 'react-redux';
import Follower from './follower.jsx';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter, matchPath } from 'react-router-dom';
import { fetchFollowerFollows, createFollow, deleteFollow } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
  const match = matchPath(ownProps.history.location.pathname, {
    path: '/users/:id',
    exact: true,
  });

  const { session, entities: { users } } = state;
  const currentUser = users[session.id];
  const user = users[match.params.id] || {};


  return {
    user: user,
    currentUser: currentUser,
    users: users,
  };
};

const mdp = dispatch => {
  return {
    openModal: () => dispatch(openModal('follower')),
    closeModal: () => dispatch(closeModal()),
    fetchFollowerFollows: (userId, followers) => dispatch(fetchFollowerFollows(userId, followers)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (currentUserId, userId) => dispatch(deleteFollow(currentUserId, userId))
  };
};

export default withRouter(connect(msp, mdp)(Follower));