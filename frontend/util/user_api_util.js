// createUser from ::import { signup } from "./session_api_utl.js";

// export const fetchUsers = () => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/users"
//   });
// };

export const fetchSearchedUsers = (query) => {
  return $.ajax({
    method: "GET",
    url: "/api/users",
    data: { query }
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: user,
    dataType: 'json',
    contentType: false,
    processData: false,
  });
};
