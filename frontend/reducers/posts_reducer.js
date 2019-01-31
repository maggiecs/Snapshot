import { RECEIVE_ALL_POSTS, RECEIVE_USER_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.payload.posts);
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case RECEIVE_USER_POSTS:
      return merge({}, state, action.payload.posts);
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.post_id].comment_ids.push(action.comment.id);
      return merge({}, state, newState);
    case LOGOUT_CURRENT_USER:
      return {};
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      let postId = action.postId;
      let commentIdsArray = newState[postId].comment_ids;
      let index = commentIdsArray.indexOf(action.commentId);
      if (index !== -1) commentIdsArray.splice(index, 1);
      newState[postId].comment_ids = commentIdsArray;
      return newState;
    default:
      return state;
  }
};

export default postsReducer;