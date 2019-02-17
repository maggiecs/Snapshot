import { createComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import NewCommentForm from './new_comment_form';

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
  };
};


export default connect(msp, mdp)(NewCommentForm);