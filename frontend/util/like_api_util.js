export const createPostLike = (like) => {
  return $.ajax({
    method: "POST",
    url: `/api/posts/${like.post_id}/likes`,
    data: { like }
  });
};

export const deletePostLike = (postId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}/likes`,
  });
};