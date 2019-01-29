import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => {
    return (
      <div>
        {/* <Link to="/login">Login</Link>
        <br/>
        <Link to="/signup">Sign up!</Link> */}
      </div>
    )
  };

  const personalGreeting = () => (
    <div>
      {/* <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button> */}
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;