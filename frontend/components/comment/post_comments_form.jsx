import React from 'react';
import { Link } from 'react-router-dom';

class PostCommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      post_id: this.props.post.id,
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.renderLikes = this.renderLikes.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.addPostLike = this.addPostLike.bind(this);
    this.removePostLike = this.removePostLike.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ body: "" });
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
    let postComments;
    const comments = this.props.comments;
    const currentUser = this.props.currentUser;
    const users = this.props.users;
    const deleteComment = this.props.deleteComment;
    const post = this.props.post || {};

    if (post && post.comment_ids) {
      postComments = post.comment_ids.map(comment_id => {
        if (comments[comment_id] && currentUser.id === comments[comment_id].author_id) {
          return (
            <div key={comment_id} className="post-comment-list-item">
              <div className="post-comment-username-body">
                <div className="post-comment-username">
                  <Link className="post-comment-author"
                    to={`/users/${comments[comment_id].author_id}`}
                    onClick={() => this.props.closeModal()}>
                    <p>{users[comments[comment_id].author_id].username}</p>
                  </Link>
                </div>
                <div className="post-comment-text">
                  <p>{comments[comment_id].body}</p>
                </div>
              </div>
              <div className="trash-icon">
                <img src={window.trash_iconURL}
                  onClick={() => deleteComment(comment_id, post.id)} />
              </div>
            </div>
          )
        } else if (comments[comment_id] && comments[comment_id].author_id) {
          return (
            <div key={comment_id} className="post-comment-list-item">
              <div className="post-comment-username">
                <Link className="post-comment-author"
                  to={`/users/${comments[comment_id].author_id}`}>
                  <p>{users[comments[comment_id].author_id].username}</p>
                </Link>
              </div>
              <div className="post-comment-text">
                <p>{comments[comment_id].body}</p>
              </div>
            </div>
          )
        }
      });
    }

    let height = 0;
    $('#post-comment-body-top div').each(function (i, value) {
      height += parseInt($(this).height());
    });
    height += '';
    $('#post-comment-body-top').animate({ scrollTop: height });

    let renderLikes;
    if (post.liker_ids) {
      renderLikes = this.renderLikes(post.liker_ids.length);
    }

    return (
      <div className="post-comment-container">
        <form className="post-comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="post-comment-body">
            <div id="post-comment-body-top">
              {postComments}
            </div>
            <div className="post_comment-body-bottom">
              <div className="post-comment-icons">
                {this.renderHeart(post)}
                <label htmlFor={`post-${post.id}-comments-input`}>
                  <img
                    className="comment-icon"
                    src={window.comment_iconURL}
                  />
                </label>
              </div>
              <div className="post-comment-likes">
                {renderLikes}
              </div>
              <div className="post-comment-add-comment-box">
                <div className="post-comment-add-comment">
                  <input type="text"
                    id={`post-${post.id}-comments-input`}
                    value={this.state.body}
                    onChange={this.handleInput}
                    placeholder="Add a comment..."/>
                </div>
                <div className="post-comment-submit-button">
                  <input type="submit" value="Post" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default PostCommentsForm;