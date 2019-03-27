import { RECEIVE_USERS } from '../actions/user_actions';

const notFollowingUsersReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.keys(action.users);
    default:
      return state;
  }
};

export default notFollowingUsersReducer;