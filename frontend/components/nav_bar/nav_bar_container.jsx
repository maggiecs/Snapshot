import { connect } from 'react-redux';
import { fetchSearchedUsers } from '../../actions/user_actions';
import NavBar from './nav_bar';

const msp = (state) => {
  return {
    searchedUsers: Object.values(state.searched),
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    fetchSearchedUsers: (query) => dispatch(fetchSearchedUsers(query))
  };
};

export default connect(msp, mdp)(NavBar);