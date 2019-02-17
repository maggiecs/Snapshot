import { RECEIVE_ALL_POSTS, RECEIVE_USER_POSTS, RECEIVE_POST, REMOVE_POST, CLEAR_PREV_POSTS } from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POST_LIKE, REMOVE_POST_LIKE } from "../actions/like_actions";
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  let newState = merge({}, state);
  let postId;
  let userId;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
    case RECEIVE_POST:
    case RECEIVE_USER_POSTS:
      return merge({}, state, action.payload.posts);
    case RECEIVE_COMMENT:
      newState[action.comment.post_id].comment_ids.push(action.comment.id);
      return merge({}, state, newState);
    case LOGOUT_CURRENT_USER:
    case CLEAR_PREV_POSTS:
      return {};
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    case REMOVE_COMMENT:
      postId = action.postId;
      let commentIdsArray = newState[postId].comment_ids;
      let index = commentIdsArray.indexOf(action.commentId);
      if (index !== -1) commentIdsArray.splice(index, 1);
      newState[postId].comment_ids = commentIdsArray;
      return newState;
    case RECEIVE_POST_LIKE:
      newState[action.like.post_id].liker_ids.push(action.like.liker_id);
      return merge({}, state, newState);
    case REMOVE_POST_LIKE:
      postId = action.postId;
      userId = action.userId;
      let likerIdsArray = newState[postId].liker_ids;
      newState[postId].liker_ids = likerIdsArray.filter(id => id !==  userId);
      return newState;
    default:
      return state;
  }
};

export default postsReducer;