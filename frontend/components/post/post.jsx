import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.createPost(formData);
  }

  render() {
  
   
    return (
      <div className="post-show-container">
        <div className="post-show-container-img">
          <img src={this.props.post.photoUrl} />
        </div>
        <div className="post-show-right-container">
          <div className="post-show-right-header">
            <img src={this.props.post.photoUrl}  />
            <div className="post-show-right-edit">
              <h2>{this.props.user.username}</h2>
              <Link to={`post/${this.props.post.id}/edit`}>Edit Post</Link>
            </div>
          </div>
          <div className="post-show-right-bottom">
            <div className="post-show-comments">
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