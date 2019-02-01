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
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ body: "" });
  }

  render() {
    let postComments;
    const comments = this.props.comments;
    const currentUser = this.props.currentUser;
    const users = this.props.users;
    const deleteComment = this.props.deleteComment;
    const post = this.props.post;

    if (post && post.comment_ids) {
      postComments = post.comment_ids.map(comment_id => {
        if (comments[comment_id] && currentUser.id === comments[comment_id].author_id) {
          return (
            <div key={comment_id} className="post-comment-list-item">
              <div className="post-comment-username-body">
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

    return (
      <div className="post-comment-container">
        <form className="post-comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="post-comment-body">
            <div id="post-comment-body-top">
              {postComments}
            </div>
            <div className="post_comment-body-bottom">
              <div className="post-comment-icons">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
              </div>
              <div className="post-comment-likes">
                <p>100 likes</p>
              </div>
              <div className="post-comment-add-comment-box">
                <div className="post-comment-add-comment">
                  <textarea type="text"
                    value={this.state.body}
                    onChange={this.handleInput}
                    placeholder="Add a comment..."></textarea>
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