import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="login-bottom-nav">
        <ul className="login-bottom-links">
          <li><a href="https://github.com/maggiecs">GITHUB</a></li>
          <li><a href="https://www.linkedin.com/in/maggie-chen1">LINKEDIN</a></li>
          <li><a href="https://angel.co/maggie-chen-11">ANGELLIST</a></li>
          <li><a href="http://maggiechen.me/">ABOUT MAGGIE</a></li>
        </ul>
      </nav>
      <small className="footer-copy">
        &copy; 2019 SNAPSHOT
          </small>
    </footer>
  );
};

export default Footer;