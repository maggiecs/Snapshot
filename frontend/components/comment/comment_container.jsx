import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentForm from './comment_form';

const msp = ({ session, entities: { users, posts, comments } }) => {
  // debugger
  return {
    currentUser: users[session.id],
    users: users,
    // posts: posts,
    comments: comments,
  };
};

const mdp = dispatch => {
  return {
    fetchUserComments: (postId) => dispatch(fetchComments(postId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id))
  };
};


export default connect(msp, mdp)(CommentForm);