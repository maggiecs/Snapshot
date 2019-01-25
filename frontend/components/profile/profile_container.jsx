import { connect } from 'react-redux';

import ProfileForm from './profile_form';
import { updateUser } from '../../actions/user_actions';

const msp = (state) => {
  const { session, entities: { users } } = state;
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(msp, mdp)(ProfileForm);