import React from 'react';


const PostIndexItem = ({ post, users }) => {
  return (
    <div className="post-index-image-box">
      <div className="post-index-image-header">
        {/* <h2>{users[post.author_id].username}</h2> */}
      </div>
      <div key={post.id} className="post-index-image">
        <img src={post.photoUrl} />
      </div>
      <div className="post-index-image-bottom">
        <div className="post-index-image-icons">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
        </div>
        <div className="post-index-image-likes">
        <p>100 likes</p>
        </div>
        <div className="post-index-image-comments">
          <p>INSERT COMMENTS HERE</p>
          <p>INSERT COMMENTS HERE</p>
          <p>INSERT COMMENTS HERE</p>
          <p>INSERT COMMENTS HERE</p>
        </div>
        <div className="post-index-image-add-comment">
          <textarea placeholder="Add a comment..."></textarea>
        </div>
      </div>
    </div>
  );
};  

export default PostIndexItem;