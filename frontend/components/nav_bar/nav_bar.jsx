import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchedUser: "",
                   currentDisplayedUsers: this.props.users };
    this.onSearchedChange = this.onSearchedChange.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  onSearchedChange() {
    let newDisplayedUsers = _.filter(this.props.users, user => user.username.includes(event.target.value.toLowerCase()));
    this.setState({
      searchedUser: event.target.value,
      currentDisplayedUsers: newDisplayedUsers
    });
  }

  renderUsers() {
    return this.state.currentDisplayedUsers.map((user) => {
      return <li>{user.username}</li>;
    });
  }

  render() {
  
    return (
      
      <header className="header">
        <ul className="header-nav">
          <li className="nav-logo">
            <Link to="/"><i className="fab fa-instagram"></i></Link>
            <Link to="/"><p className="logo-name">Snapshot</p></Link>
            {/* <img src={window.header_logoURL} /></Link> */}
          </li>
          <li className="nav-search-container">
            <input type="text"
              value={this.searchedUser}
              className="nav-search"
              onChange={this.update('searchedUser')}
              placeholder="Search"
            />
          </li> 
          <li>
            <ul className="nav-list">
              <li><a href="#">Explore</a></li>
              <li><a href="#">Activity</a></li>
              <li><a href="#">Profile</a></li>
            </ul>
          </li>

          {/* {this.renderUsers()} */}
        </ul>
    </header>

    );
    }
  }


export default NavBar;
