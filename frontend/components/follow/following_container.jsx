import { connect } from 'react-redux';
import Following from './following.jsx';
import { openModal } from '../../actions/modal_actions';
import { withRouter, matchPath } from 'react-router-dom';

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
    users: users
  };
};

const mdp = dispatch => {
  return {
    openModal: () => dispatch(openModal('following'))
  };
};

export default withRouter(connect(msp, mdp)(Following));