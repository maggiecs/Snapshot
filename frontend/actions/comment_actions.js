import * as CommentApiUtil from "../util/comment_api_util";

export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const fetchComments = (postId) => {
  return dispatch => {
    return CommentApiUtil.fetchComments(postId).then(comments => dispatch(receivePostComments(comments)));
  };
};

export const createComment = (comment) => {
  return dispatch => {
    return CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)));
  };
};

export const deleteComment = (id, postId) => {
  return dispatch => {
    return CommentApiUtil.deleteComment(id).then(() => dispatch(removeComment(id, postId)));
  };
};

const receivePostComments = (payload) => {
  return {
    type: RECEIVE_POST_COMMENTS,
    payload
  };
};

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = (commentId, postId) => {
  return {
    type: REMOVE_COMMENT,
    commentId,
    postId
  };
};

