import * as UserApiUtil from "../util/user_api_util";

// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";
export const RECEIVE_NULL_USERS = "RECEIVE_NULL_USERS";

export const fetchSearchedUsers = (query) => {
  return dispatch => {
    return UserApiUtil.fetchSearchedUsers(query).then(users => dispatch(receiveSearchedUsers(users)));
  };
};

export const fetchUsers = (notFollowing) => {
  return dispatch => {
    return UserApiUtil.fetchUsers(notFollowing).then(users => dispatch(receiveUsers(users)));
  };
};

export const fetchUser = (id) => {
  return dispatch => {
    return UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
  };
};

export const updateUser = (user) => {
  return dispatch => {
    return UserApiUtil.updateUser(user).then(user => dispatch(receiveUser(user)));
  };
};

const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    payload
  };
};

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveSearchedUsers = (users) => {
  return {
    type: RECEIVE_SEARCHED_USERS,
    users
  };
};

export const receiveNullUsers = () => {
  return {
    type: RECEIVE_NULL_USERS,
    users: {}
  };
};


