import React from 'react';

const ProfilePostItem = ({ posts, post_id, openModal} ) => {
    return (
      <li key={post_id} posts={posts} onClick={openModal}>
          <img src={posts[post_id].photoUrl} />
      </li>
    );

};

export default ProfilePostItem;