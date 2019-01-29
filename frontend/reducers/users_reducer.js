import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_SEARCHED_USERS } from '../actions/user_actions';
import { RECEIVE_USER_POSTS, RECEIVE_ALL_POSTS  } from '../actions/post_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_SEARCHED_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, action.payload.users);
    case RECEIVE_USER_POSTS:
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;

