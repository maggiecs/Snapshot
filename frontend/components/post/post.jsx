import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  renderEditButton() {
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <div className="post-show-right-edit">
          <h2>{this.props.user.username}</h2>
          <Link to={`posts/${this.props.post.id}/edit`} onClick={() => this.props.closeModal()}>Edit Post</Link>
        </div>
      );
    } else {
      return (
        <div className="post-show-right-edit">
          <h2>{this.props.user.username}</h2>
        </div>
      );
    }
  }

  renderDeleteButton() {
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <div className="trash-icon">
          <img src={window.trash_iconURL} onClick={() => this.props.deletePost(this.props.post.id)
            .then(this.props.closeModal())} />
        </div>
      );
    } else {
      <div className="trash-icon">
      </div>
      };
  }
  render() {
    return (
      <div className="post-show-container">
        <div className="post-show-container-img">
          <img src={this.props.post.photoUrl} />
        </div>
        <div className="post-show-right-container">
          <div className="post-show-right-header">
            <div className="post-show-photo-user">
              <img src={this.props.post.photoUrl}  />
              {this.renderEditButton()}
            </div>
              {this.renderDeleteButton()}
          </div>
          <div className="post-show-right-bottom">
            <div className="post-show-comments">
              <div className="post-show-body">
                <h2>{this.props.user.username}</h2>
                <p>{this.props.post.body}</p>
              </div>
              <p>INSERT COMMENT HERE</p>
              <p>INSERT COMMENT HERE</p>
            </div>
            <div className="post-show-icons">
              <i className="far fa-heart"></i>
              <i className="far fa-comment"></i>
            </div>
            <div className="post-show-likes">
              <p>100 likes</p>
            </div>
            <div className="post-show-add-comment">
              <textarea placeholder="Add a comment..."></textarea>
            </div>
           </div>
        </div>
      </div>
    );
  }

}

export default Post;