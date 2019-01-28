import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    createPost: (post) => dispatch(createPost(post))
  };
};

export default connect(msp, mdp)(UploadForm);