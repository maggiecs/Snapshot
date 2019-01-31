import React from 'react';

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

  componentDidMount() {
    this.props.fetchUserComments(this.state.post_id);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
  }

  render() {
    let postComments;
    const comments = this.props.comments;
    if (this.props.post && this.props.post.comment_ids.length > 0) {
      postComments = this.props.post.comment_ids.map(comment_id => {
        return <li key={comment_id}>{comments[comment_id].body}</li>;
      }).reverse();
    }

    return (
      <div className="comment-container">
        <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="comment-body">
            <div className="comment-list">
              {postComments}
            </div>
            <textarea type="text"
              value={this.state.body}
              onChange={this.handleInput}
              placeholder="Add a comment..."></textarea>
          </div>
          <div className="comment-submit-button">
            <input type="submit" value="Add comment" />
          </div>
        </form>
      </div>
    );
  }

}

export default CommentForm;