import { connect } from 'react-redux';
import Following from './following.jsx';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter, matchPath } from 'react-router-dom';
import { fetchFolloweeFollows, createFollow, deleteFollow  } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
  
  const match = matchPath(ownProps.history.location.pathname, {
    path: '/users/:id',
    exact: true,
  });

  const { session, entities: { users } } = state;
  const currentUser = users[session.id];
  let user;

  if (match) {
    user = users[match.params.id] || {};
  } else {
    user = currentUser;
  }
  
  return {
    user: user,
    currentUser: currentUser,
    users: users
  };
};

const mdp = dispatch => {
  return {
    openModal: () => dispatch(openModal('following')),
    closeModal: () => dispatch(closeModal()),
    fetchFolloweeFollows: (userId, followees) => dispatch(fetchFolloweeFollows(userId, followees)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (currentUserId, userId) => dispatch(deleteFollow(currentUserId, userId))
  };
};

export default withRouter(connect(msp, mdp)(Following));