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
          post={post} />
      );
    });
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null ;
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" 
          value={this.state.body} 
          onChange={this.handleInput}/>
          <input type="file"
          onChange={this.handleFile}
          />
          <h3>Image preview </h3>
          {preview}
          <input type="submit" value="Submit"/>
        </form>
        <ul>
          {posts}
        </ul>
      </div>
    );
  }

}

export default PostIndex;