import * as PostApiUtil from "../util/post_api_util";

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
// export const RECEIVE_FEED_POSTS = "RECEIVE_FEED_POSTS";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const REMOVE_POST_ERRORS = "REMOVE_POST_ERRORS";
export const CLEAR_PREV_POSTS = "CLEAR_PREV_POSTS";

export const fetchPosts = () => {
  return dispatch => {
    return PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)));
  };
};

export const fetchUserPosts = (userId) => {
  return dispatch => {
    return PostApiUtil.fetchUserPosts(userId).then(posts => dispatch(receiveUserPosts(posts, userId)));
  };
};

export const fetchPost = (id) => {
  return dispatch => {
    return PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)));
  };
};


export const createPost = (post) => {
  return dispatch => {
    return PostApiUtil.createPost(post);
    // .then(post => dispatch(receivePost(post)), 
      // errors => dispatch(receivePostErrors(errors.responseJSON)));
  };
};

export const updatePost = (post) => {
  return dispatch => {
    return PostApiUtil.updatePost(post).then(post => dispatch(receivePost(post)),
      errors => dispatch(receivePostErrors(errors.responseJSON)));
  };
};


export const deletePost = (id, userId) => {
  return dispatch => {
    return PostApiUtil.deletePost(id).then(() => dispatch(removePost(id, userId)));
  };
};

const receiveAllPosts = (payload) => {
  return {
    type: RECEIVE_ALL_POSTS,
    payload
  };
};

const receiveUserPosts = (payload, userId) => {
  return {
    type: RECEIVE_USER_POSTS,
    payload,
    userId
  };
};

export const receivePost = (payload) => {
  return {
    type: RECEIVE_POST,
    payload
  };
};

const receivePostErrors = (errors) => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors
  };
};

const removePost = (postId, userId) => {
  return {
    type: REMOVE_POST,
    postId,
    userId
  };
};

export const clearPrevPosts = () => {
  return {
    type: CLEAR_PREV_POSTS
  };
};

export const removePostErrors = () => {
  return {
    type: RECEIVE_POST_ERRORS,
  };
};

const receiveFeedPosts = (posts) => {
  return {
    type: RECEIVE_FEED_POSTS,
    posts
  };
};