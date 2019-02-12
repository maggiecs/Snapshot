import { RECEIVE_SEARCHED_USERS, RECEIVE_NULL_USERS } from '../actions/user_actions';

const searchedUsersReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_USERS:
      return Object.keys(action.users);
    case RECEIVE_NULL_USERS:
      return Object.keys(action.users);
    default:
      return state;
  }
};

export default searchedUsersReducer;