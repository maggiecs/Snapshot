import React from 'react';
import PostIndexItem from './post_index_item';
import { receivePost } from '../../actions/post_actions';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: "", 
      photoFile: null,
      photoUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleInput(e) {
    this.setState({body: e.currentTarget.value});
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

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const posts = this.props.posts.map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post} 
          users={this.props.users}
          openModal={() => this.props.openModal(post.id)} />
      );
    }).reverse();
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null ;
    return (
      <div className="post-index-container">
        <div className="post-index-images">
        {posts}
      </div>
      </div>  
    );
  }

}

export default PostIndex;