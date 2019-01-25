// createUser from ::import { signup } from "./session_api_utl.js";


export const fetchUser = (id) => {
  return {
    method: "GET",
    url: `/api/users/${id}`
  };
};

export const updateUser = (user) => {
  return {
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user }
  };
};
