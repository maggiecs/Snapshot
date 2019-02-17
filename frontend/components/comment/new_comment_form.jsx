import React from 'react';
import { displayTimestamp } from '../../util/date_util';

class NewCommentForm extends React.Component {
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
    const post = this.props.post;

    return (
      <div className="comment-container">
        <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="post-createdAt-time">
              {displayTimestamp(post.created_at).toUpperCase()}
            </div>
            <div className="comment-add-comment-box">
              <div className="comment-add-comment">
                <input id={`post-${post.id}-input`} type="text"
                  value={this.state.body}
                  onChange={this.handleInput}
                  placeholder="Add a comment..." />
              </div>
              <div className="comment-submit-button">
                <input type="submit" value="Post" />
              </div>
            </div>
        </form>
      </div>
    );
  }

}

export default NewCommentForm;