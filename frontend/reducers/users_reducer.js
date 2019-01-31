import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_SEARCHED_USERS } from '../actions/user_actions';
import { RECEIVE_USER_POSTS, RECEIVE_ALL_POSTS  } from '../actions/post_actions';
import { RECEIVE_POST_COMMENTS} from '../actions/comment_actions';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser.users );
    case RECEIVE_SEARCHED_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, action.payload.users);
    case RECEIVE_USER_POSTS:
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.payload.users);
    case RECEIVE_POST_COMMENTS:
      return merge({},state, action.payload.users);
    case REMOVE_POST:
      let newState = merge({}, state);
      let userId = action.userId;
      let postIdsArray = newState[userId].post_ids;
      let index = postIdsArray.indexOf(action.postId);
      if (index !== -1) postIdsArray.splice(index, 1);
      newState[userId].post_ids = postIdsArray;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;

