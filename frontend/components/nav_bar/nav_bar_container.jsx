import { connect } from 'react-redux';
import { fetchSearchedUsers, receiveNullUsers } from '../../actions/user_actions';
import NavBar from './nav_bar';

const msp = (state) => {
  return {
    searchedUsers: Object.values(state.searched),
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    fetchSearchedUsers: (query) => dispatch(fetchSearchedUsers(query)),
    receiveNullUsers: () => dispatch(receiveNullUsers())
  };
};

export default connect(msp, mdp)(NavBar);