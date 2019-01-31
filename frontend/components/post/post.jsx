import React from 'react';
import { Link } from 'react-router-dom';
import PostCommentsContainer from '../comment/post_comments_container';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
    this.props.fetchComments(this.props.postId);
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
        <div className="post-trash-icon">
          <img src={window.trash_iconURL} onClick={() => this.props.deletePost(this.props.post.id, this.props.currentUser.id)
            .then(this.props.closeModal())} />
        </div>
      );
    } else {
      <div className="trash-icon">
      </div>
      };
  }
  render() {
    const comments = this.props.comments;
    const users = this.props.users;
    const post = this.props.post;
    // const postComments = comments.map(comment => {
    //   if (users[comment.author_id]) {
    //   return (
        //   <div className="post-comments">
        //   <span className="post-comment-username">
        //     {users[comment.author_id].username}
        //   </span>
        //   <li>{comment.body}</li>
        // </div>
        // <PostCommentsContainer post={post} />
    //   );
    //   }
    // });
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
              {/* <div className="post-show-body">
                <h2>{this.props.user.username}</h2>
                <p>{this.props.post.body}</p>
              </div>  */}
            </div>
           
            
            <div className="post-show-comments">
              <div className="post-show-body">
                <h2>{this.props.user.username}</h2>
                <p>{this.props.post.body}</p>
              </div>
              {/* {postComments} */}
              {/* <div className="post-show-icons">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
              </div>
              <div className="post-show-likes">
                <p>100 likes</p>
              </div> */}
               
              <PostCommentsContainer post={post} />
            </div>
           </div>
        </div>
      </div>
    );
  }

}

export default Post;