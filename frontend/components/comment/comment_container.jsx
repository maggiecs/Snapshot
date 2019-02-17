import { createComment, deleteComment} from '../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { closeModal } from '../../actions/modal_actions';

const msp = ({ session, entities: { users, comments } }) => {
  return {
    currentUser: users[session.id],
    users: users,
    comments: Object.values(comments),
  };
};

const mdp = dispatch => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id, postId) => dispatch(deleteComment(id, postId)),
    closeModal: () => dispatch(closeModal()),
  };
};


export default connect(msp, mdp)(CommentForm);