import React from 'react';


const PostIndexItem = ({ post }) => {
  return (
    <li key={post.id}>
      <img src={post.photoUrl} />
    </li>
  );
};  

export default PostIndexItem;