import React from 'react';
import { Link } from 'react-router-dom';

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

  render() {
    let postComments;
    const comments = this.props.comments;
    const currentUser = this.props.currentUser;
    const users = this.props.users;
    const deleteComment = this.props.deleteComment;
    const post = this.props.post;

    if (post && post.comment_ids) {
      postComments = post.comment_ids.map(comment_id => {
        debugger
        if (currentUser.id === comments[comment_id].author_id) {
          return (
            <div key={comment_id} className="comment-list-item">
              <div className="comment-username-body">
                <div className="comment-username">
                  <Link className="comment-author" 
                        to={`/users/${comments[comment_id].author_id}`}>
                        <p>{users[comments[comment_id].author_id].username}</p>
                  </Link>
                </div>
                <div className="comment-text">
                  <p>{comments[comment_id].body}</p>
                </div>
              </div>
              <div className="trash-icon">
                <img src={window.trash_iconURL}
                  onClick={() => deleteComment(comment_id, post.id)} />
              </div>
            </div>
          )
        } else {
          return (
            <div key={comment_id} className="comment-list-item">
              <div className="comment-username">
                <Link className="comment-author"
                  to={`/users/${comments[comment_id].author_id}`}>
                  <p>{users[comments[comment_id].author_id].username}</p>
                </Link>
              </div>
              <div className="comment-text">
                <p>{comments[comment_id].body}</p>
              </div>
            </div>
          )}
      }).reverse();
    }

    return (
      <div className="comment-container">
        <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="comment-body">
            {postComments}
            <div className="comment-add-comment-box">
              <div className="comment-add-comment">
                <textarea type="text"
                  value={this.state.body}
                  onChange={this.handleInput}
                  placeholder="Add a comment..."></textarea>
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