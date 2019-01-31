import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../comment/comment_container';

const PostIndexItem = ({ post, users }) => {
  
  return (
    <div className="post-index-image-box">
      <div className="post-index-image-header">
        <div className="post-index-author-img">
          <img src={users[post.author_id].photoUrl} />
        </div>
        <Link className="post-index-author" to={`/users/${post.author_id}`}><h2>{users[post.author_id].username}</h2></Link>
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
        <div className="post-index-image-body">
          <div className="post-index-author">
            <Link className="post-index-author" to={`/users/${post.author_id}`}><h2>{users[post.author_id].username}</h2></Link>
          </div>
          <p>{post.body}</p>
        </div>
        <div className="post-index-image-comments">
          <CommentContainer post={post} />
        </div>
      </div>
    </div>
  );
};  

export default PostIndexItem;