import { connect } from 'react-redux';
import EditPostForm from './edit_post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = ({ session, entities: { users, posts } }, ownProps) => {
  let post = {};

  if (posts[ownProps.match.params.id]) {
    post = posts[ownProps.match.params.id];
  }

  return {
    currentUser: users[session.id],
    post: post
  };
};

const mdp = dispatch => {
  return {
    fetchPost: (post) => dispatch(fetchPost(post)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updatePost: (post) => dispatch(updatePost(post))
  };
};

export default connect(msp, mdp)(EditPostForm);