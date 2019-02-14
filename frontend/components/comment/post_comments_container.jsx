import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import PostCommentsForm from './post_comments_form';
import { createPostLike, deletePostLike } from '../../actions/like_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = ({ session, entities: { users, comments } }) => {
  return {
    currentUser: users[session.id],
    users: users,
    comments: comments,
  };
};

const mdp = dispatch => {
  return {
    // fetchUserComments: (postId) => dispatch(fetchComments(postId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id, postId) => dispatch(deleteComment(id, postId)),
    createPostLike: (like) => dispatch(createPostLike(like)),
    deletePostLike: (userId, postId) => dispatch(deletePostLike(userId, postId)),
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(msp, mdp)(PostCommentsForm);


