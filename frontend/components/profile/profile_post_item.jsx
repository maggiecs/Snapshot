import React from 'react';

const ProfilePostItem = ({ posts, post_id, openModal} ) => {
    let post = posts[post_id] || {};
    return (
      <li key={post_id} posts={posts} onClick={openModal}>
          <img src={post.photoUrl} />
      </li>
    );

};

export default ProfilePostItem;