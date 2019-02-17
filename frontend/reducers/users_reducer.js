import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_SEARCHED_USERS } from '../actions/user_actions';
import { RECEIVE_USER_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST  } from '../actions/post_actions';
import { RECEIVE_POST_COMMENTS} from '../actions/comment_actions';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_FOLLOWS } from '../actions/follow_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser.users );
    case RECEIVE_SEARCHED_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
    case RECEIVE_POST:
      return merge({}, state, action.payload.users);
    case RECEIVE_USER_POSTS:
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.payload.users);
    case RECEIVE_POST_COMMENTS:
      return merge({},state, action.payload.users);
    case REMOVE_POST:
      let userId = action.userId;
      let postIdsArray = newState[userId].post_ids;
      let index = postIdsArray.indexOf(action.postId);
      if (index !== -1) postIdsArray.splice(index, 1);
      newState[userId].post_ids = postIdsArray;
      return newState;
    case RECEIVE_FOLLOW:
      newState[action.follow.followee_id].follower_ids.push(action.follow.follower_id);
      newState[action.follow.follower_id].followee_ids.push(action.follow.followee_id);
      return merge({}, state, newState);
    case REMOVE_FOLLOW:
      let followeeIds = newState[action.currentUserId].followee_ids;
      let followerIds = newState[action.userId].follower_ids;
      newState[action.currentUserId].followee_ids = followeeIds.filter(id => id !== action.userId);
      newState[action.userId].follower_ids = followerIds.filter(id => id !== action.currentUserId);
      return newState;
    case RECEIVE_FOLLOWS:
      return merge({}, state, action.follows.users);
    // case RECEIVE_USER_POSTS:
    //   return merge({}, state, action.payload.users);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default usersReducer;

