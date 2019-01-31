import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchedUser: "" };
  }

  update(field) {
    return e => {
      this.setState({
      [field]: e.currentTarget.value });
      this.props.fetchSearchedUsers(e.currentTarget.value);
    };
  }

  renderUsers() {
    if (this.state.searchedUser.length > 0) {
      return this.props.searchedUsers.map((userId) => {
        return <Link key={userId}
                     className="nav-search-user"
                     onClick={() => this.setState({ searchedUser: "" })} 
                     to={`/users/${userId}`} >
                  <img className="nav-search-user-img" src={this.props.users[userId].photoUrl} />
                  <div className="nav-search-user-info">
                    <div className="nav-search-user-username">
                      {this.props.users[userId].username}
                    </div>
                    <div className="nav-search-user-fullname">
                      {this.props.users[userId].full_name}
                    </div> 
                  </div>
              </Link>;
      });
    }
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
            <img className="nav-search-icon" src={window.search_iconURL} />
            <input type="text"
              value={this.state.searchedUser}
              className="nav-search"
              onChange={this.update('searchedUser')}
              placeholder="Search"
            />
            <ul className="nav-search-user-list">
              {this.renderUsers()}
            </ul>
          </li> 
          <li>
            <ul className="nav-list">
              <li><Link to="/upload"><img src={window.upload_iconURL} /></Link></li>
              <li><Link to="/profile"><img src={window.profile_iconURL} /></Link></li>
            </ul>
          </li>
        </ul>
       
    </header>

    );
    }
  }


export default NavBar;
