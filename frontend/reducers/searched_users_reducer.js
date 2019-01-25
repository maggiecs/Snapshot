import { RECEIVE_SEARCHED_USERS } from '../actions/user_actions';

const searchedUsersReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_USERS:
      return Object.values(action.users);
    default:
      return state;
  }
};

export default searchedUsersReducer;