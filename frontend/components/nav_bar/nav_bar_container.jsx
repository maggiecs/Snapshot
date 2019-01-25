import { connect } from 'react-redux';

import NavBar from './nav_bar';

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    users: users
  };
};

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(msp, mdp)(NavBar);