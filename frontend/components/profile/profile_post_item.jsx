import React from 'react';

const ProfilePostItem = ({ posts, post_id, openPostModal} ) => {
    let post = posts[post_id] || {};
    return (
      <li key={post_id} posts={posts} onClick={openPostModal}>
          <img src={post.photoUrl} />
      </li>
    );

};

export default ProfilePostItem;