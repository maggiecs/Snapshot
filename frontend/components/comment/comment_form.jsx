import React from 'react';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
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
                  to={`/users/${comment.author_id}`}
                  onClick={() => this.props.closeModal()}>
                  <h2>{users[comment.author_id].username}</h2>
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
      <div className="comment-body">
        {postComments} 
      </div>
    );
  }

}

export default CommentForm;