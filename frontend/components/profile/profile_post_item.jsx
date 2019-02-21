import React from 'react';

const ProfilePostItem = ({ posts, post_id, openPostModal} ) => {
    let post = posts[post_id] || {};
    if (post.liker_ids && post.comment_ids) {
      return (
        <li key={post_id} className="profile-photo-item" posts={posts} onClick={openPostModal}>
            <img src={post.photoUrl} />
            <div className="hover-icons">
              <div className="hover-icon heart">
                <i className="fa fa-heart"></i>
                <p>{post.liker_ids.length}</p>
              </div>
              <div className="hover-icon comment">
                <i className="fa fa-comment"></i>
                <p>{post.comment_ids.length}</p>
              </div>
            </div>
        </li>
      );
    } else {
      return (
        <li key={post_id} className="profile-photo-item" posts={posts} onClick={openPostModal}>
          <img src={post.photoUrl} />
        </li>
      )
    }

};

export default ProfilePostItem;