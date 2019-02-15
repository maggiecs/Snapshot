import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";

export const fetchFollowerFollows = (userId, followers) => {
  return dispatch => {
    return FollowAPIUtil.fetchFollowerFollows(userId, followers).then(follows => dispatch(receiveFollows(follows)));
  };
};

export const fetchFolloweeFollows = (userId, followees) => {
  return dispatch => {
    return FollowAPIUtil.fetchFolloweeFollows(userId, followees).then(follows => dispatch(receiveFollows(follows)));
  };
};


export const createFollow = (follow) => {
  return dispatch => {
    return FollowAPIUtil.createFollow(follow).then(follow => dispatch(receiveFollow(follow)));
  };
};

export const deleteFollow = (currentUserId, userId) => {
  return dispatch => {
    return FollowAPIUtil.deleteFollow(userId).then(() => dispatch(removeFollow(currentUserId, userId)));
  };
};

const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow: follow
});

const removeFollow = (currentUserId, userId) => ({
  type: REMOVE_FOLLOW,
  currentUserId,
  userId
});

const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
});