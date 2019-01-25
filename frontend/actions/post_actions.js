import * as PostApiUtil from "../util/post_api_util";

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const REMOVE_POST_ERRORS = "REMOVE_POST_ERRORS";

export const fetchPosts = () => {
  return dispatch => {
    return PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)));
  };
};

export const fetchPost = (id) => {
  return dispatch => {
    return PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)));
  };
};


export const createPost = (post) => {
  return dispatch => {
    return PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)), 
      errors => dispatch(receivePostErrors(errors.responseJSON)));
  };
};

export const updatePost = (post) => {
  return dispatch => {
    return PostApiUtil.updatePost(post).then(post => dispatch(receivePost(post)),
      errors => dispatch(receivePostErrors(errors.responseJSON)));
  };
};


export const deletePost = (id) => {
  return dispatch => {
    return PostApiUtil.deletePost(id).then(() => dispatch(removePost(id)));
  };
};

const receiveAllPosts = (posts) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};

const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post
  };
};

const receivePostErrors = (errors) => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors
  };
};

const removePost = (postId) => {
  return {
    type: REMOVE_POST,
    postId
  };
};

export const removePostErrors = () => {
  return {
    type: RECEIVE_POST_ERRORS,
  };
};