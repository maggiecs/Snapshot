import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_POST_LIKE = "RECEIVE_POST_LIKE";
export const REMOVE_POST_LIKE = "REMOVE_POST_LIKE";


export const createPostLike = (like) => {
  return dispatch => {
    return LikeApiUtil.createPostLike(like).then(like => dispatch(receivePostLike(like)));
  };
};

export const deletePostLike = (userId, postId) => {
  return dispatch => {
    return LikeApiUtil.deletePostLike(postId).then(() => dispatch(removePostLike(userId, postId)));
  };
};

const receivePostLike = (like) => {
  return {
    type: "RECEIVE_POST_LIKE",
    like
  };
};

const removePostLike = (userId, postId) => {
  return {
    type: "REMOVE_POST_LIKE",
    userId,
    postId
  };
};

