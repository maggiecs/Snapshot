import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import PostCommentsForm from './post_comments_form';

const msp = ({ session, entities: { users, comments } }) => {
  return {
    currentUser: users[session.id],
    users: users,
    comments: comments,
  };
};

const mdp = dispatch => {
  return {
    fetchUserComments: (postId) => dispatch(fetchComments(postId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id, postId) => dispatch(deleteComment(id, postId))
  };
};


export default connect(msp, mdp)(PostCommentsForm);