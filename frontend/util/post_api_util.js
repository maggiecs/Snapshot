export const fetchPosts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts"
  });
};

export const fetchPost = (id) => {
  return {
    method: "GET",
    url: `/api/posts/${id}`
  };
};

export const createPost = (post) => {
  return {
    method: "POST",
    url: "/api/posts",
    data: { post }
  };
};

export const updatePost = (post) => {
  return {
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: { post }
  };
};
export const deletePost = (id) => {
  return {
    method: "DELETE",
    url: `/api/posts/${id}`
  };
};