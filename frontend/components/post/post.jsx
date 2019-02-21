import React from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../comment/comment_container';
import NewCommentContainer from '../comment/new_comment_container';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.renderLikes = this.renderLikes.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.addPostLike = this.addPostLike.bind(this);
    this.removePostLike = this.removePostLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  renderEditButton() {
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <div className="post-show-right-edit">
          <Link to={`/users/${this.props.user.id}`} onClick={() => this.props.closeModal()}>
            <h2>{this.props.user.username}</h2>
          </Link>
          <Link to={`posts/${this.props.post.id}/edit`} onClick={() => this.props.closeModal()}>Edit Post</Link>
        </div>
      );
    } else {
      return (
        <div className="post-show-right-edit">
          <Link to={`/users/${this.props.user.id}`} onClick={() => this.props.closeModal()}>
            <h2>{this.props.user.username}</h2>
          </Link>
        </div>
      );
    }
  }

  renderDeleteButton() {
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <div className="post-trash-icon">
          <img src={window.trash_iconURL} onClick={() => this.props.deletePost(this.props.post.id, this.props.currentUser.id)
            .then(this.props.closeModal())} />
        </div>
      );
    } else {
      <div className="post-trash-icon">
      </div>
      };
  }

  addPostLike() {
    return (
      this.props.createPostLike({ liker_id: this.props.currentUser.id, post_id: this.props.post.id })
    );
  }

  removePostLike() {
    return (
      this.props.deletePostLike(this.props.currentUser.id, this.props.post.id)
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
          className="full-heart-icon"
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

  render() {
    const comments = this.props.comments;
    const users = this.props.users;
    const post = this.props.post;

    let renderLikes;
    if (post.liker_ids) {
      renderLikes = this.renderLikes(post.liker_ids.length);
    }

    let commentBox = document.getElementsByClassName('.post-comment-body-top')[0];
    if (commentBox) {
      commentBox.scrollTop = commentBox.scrollHeight;
    }
    return (
      <div className="post-show-container">
        <div className="post-show-container-img">
          <img src={this.props.post.photoUrl} />
        </div>
        <div className="post-show-right-container">
          <div className="post-show-right-header">
            <div className="post-show-photo-user">
              <img src={this.props.user.photoUrl}  />
              {this.renderEditButton()}
            </div>
              {this.renderDeleteButton()}
          </div>
          <div className="post-show-right-bottom">   
            <div className="post-show-comments">
              <div className="post-show-body">
                <div className="post-show-username">
                  <Link to={`/users/${this.props.user.id}`} onClick={() => this.props.closeModal()}>
                    <h2>{this.props.user.username}</h2>
                  </Link>
                </div>
                <p>{this.props.post.body}</p>
              </div>
              <div className="post-comment-container">
                  <div className="post-comment-body">
                    <div className="post-comment-body-top">
                      <CommentsContainer post={post} />
                    </div>
                    <div className="post_comment-body-bottom">
                      <div className="post-comment-icons">
                        {this.renderHeart(post)}
                        <label htmlFor={`post-${post.id}-input`}>
                          <img
                            className="comment-icon"
                            src={window.comment_iconURL}
                          />
                        </label>
                      </div>
                      <div className="post-comment-likes">
                        {renderLikes}
                      </div>
                      <NewCommentContainer post={post} />
                    </div>
                  </div>
              </div>
            </div>
           </div>
        </div>
      </div>
    );
  }

}

export default Post;