import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

export const login = (user) => {
  return dispatch => {
    return SessionApiUtil.login(user).then(user => dispatch(
      receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then(() => dispatch(
      logoutCurrentUser()), errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const signup = (user) => {
  return dispatch => {
    return SessionApiUtil.signup(user).then(user => dispatch(
      receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_SESSION_ERRORS,
  };
};

