import React from 'react';
import PostIndexItem from './post_index_item';
import { receivePost } from '../../actions/post_actions';

class PostIndex extends React.Component {
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
      <img src={this.props.post.photoUrl} />
    );
  }

}

export default PostIndex;