import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      offset: 0,
      prevPostsLength: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.clearPrevPosts();
    this.props.fetchPosts(this.state.limit, this.state.offset, this.props.feed);
    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll() {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    if (((window.innerHeight + window.scrollY) >= (scrollHeight)) && (this.props.posts.length - this.state.prevPostsLength) >= this.state.limit) {
      this.loadMore();
      this.props.fetchPosts(this.state.limit, this.state.offset, this.props.feed);
    }
  }

  loadMore() {
    this.setState({
      limit: this.state.limit,
      offset: this.state.offset + this.state.limit,
      prevPostsLength: this.props.posts.length
    });
  }
  
  render() {
    const {
      posts,
      users,
      currentUser,
      createPostLike,
      deletePostLike,
    } = this.props;

    const indexPosts = posts.map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post} 
          users={users}
          currentUser={currentUser}
          createPostLike={createPostLike}
          deletePostLike={deletePostLike}
        />
      );
    }).reverse();
    
    return (

      <div className="post-index-container">
        <div className="post-index-images">
        {indexPosts}
        </div>
      </div> 
    
    );
  }

}

export default PostIndex;