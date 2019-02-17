import React from 'react';
import { Link } from 'react-router-dom';
import { displayTimestamp } from '../../util/date_util';

class CommentForm extends React.Component {
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

  renderRemoveCommentIcon(comment, currentUser, deleteComment) {
    if (currentUser.id === comment.author_id) {
      return (
        <div className="xmark-icon">
          <img src={window.xmark_iconURL}
            onClick={() => deleteComment(comment.id, comment.post_id)} />
        </div>
      );
    }
  }

  render() {
    let postComments;
    const comments = this.props.comments;
    const currentUser = this.props.currentUser;
    const users = this.props.users;
    const deleteComment = this.props.deleteComment;
    const post = this.props.post;

    postComments = comments.filter(comment => comment.post_id === post.id).map(comment => {
        return (
          <div key={comment.id} className="comment-list-item">
            <div className="comment-username-body">
              <div className="comment-username">
                <Link className="comment-author" 
                      to={`/users/${comment.author_id}`}>
                      <p>{users[comment.author_id].username}</p>
                </Link>
              </div>
              <div className="comment-text">
                <p>{comment.body}</p>
              </div>
            </div>
            {this.renderRemoveCommentIcon(comment, currentUser, deleteComment)}
          </div>
        )
    });

    return (
      <div className="comment-container">
        <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="comment-body">
            {postComments}
            <div className="post-createdAt-time">
              {displayTimestamp(post.created_at).toUpperCase()}
            </div>
            <div className="comment-add-comment-box">
              <div className="comment-add-comment">
                <input id={`post-${post.id}-input`} type="text"
                  value={this.state.body}
                  onChange={this.handleInput}
                  placeholder="Add a comment..."/>
              </div>
              <div className="comment-submit-button">
                <input type="submit" value="Post" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default CommentForm;