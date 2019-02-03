import React from 'react';
import { Link } from 'react-router-dom';
import CommentContainer from '../comment/comment_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderLikes = this.renderLikes.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.addPostLike = this.addPostLike.bind(this);
    this.removePostLike = this.removePostLike.bind(this);
  }

  addPostLike(){
    return (    
      this.props.createPostLike({liker_id: this.props.currentUser.id, post_id: this.props.post.id })
    );
  }

  removePostLike(){
    return (
    this.props.deletePostLike(this.props.currentUser.id, this.props.post.id )
    );
  }

  renderLikes(length) {
    if (length === 0) { 
      return (
        <p>Be the first to <span onClick={this.addPostLike} className="post-index-first-like" ><b>like this</b></span ></p>
      );
    } else if (length === 1) {
      return (
        <p>1 like</p>
      );
    } else {
      return (
        <p>{length} likes</p>
      );
    }
  };

  renderHeart(post) {
    const { currentUser } = this.props;
    if (post.liker_ids && post.liker_ids.includes(currentUser.id)) {
      return (
        <img
        className = "full-heart-icon"
        src={window.full_heartURL}
        onClick={this.removePostLike}
        />
      );
    } else {
      return (
        <img
          className="empty-heart-icon"
          src={window.empty_heartURL}
          onClick={this.addPostLike}
        />
      );
    }
  };

  render (){
    const post = this.props.post || {};
    const users = this.props.users;
    let renderLikes;
    if (post.liker_ids) {
      renderLikes = this.renderLikes(post.liker_ids.length);
    };
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
            {this.renderHeart(post)}
            <label htmlFor={`post-${post.id}-input`}>
            <img
              className="comment-icon"
              src={window.comment_iconURL}
            />
            </label>
          </div>
          <div className="post-index-image-likes">
            {renderLikes}
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
  }
};  

export default PostIndexItem;