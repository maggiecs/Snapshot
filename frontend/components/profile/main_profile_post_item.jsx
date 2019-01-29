import React from 'react';

const MainProfilePostItem = ({ posts, post_id} ) => {
    return (
      <li key={post_id} posts={posts}>
          <img src={posts[post_id].photoUrl} />
      </li>
    );

};

export default MainProfilePostItem;