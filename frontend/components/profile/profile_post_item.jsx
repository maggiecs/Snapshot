import React from 'react';

const ProfilePostItem = ({ posts, post_id} ) => {
    return (
      <li key={post_id} posts={posts}>
          <img src={posts[post_id].photoUrl} />
      </li>
    );

};

export default ProfilePostItem;