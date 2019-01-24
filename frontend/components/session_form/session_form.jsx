import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeErrors();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDemoSubmit(e) {
    e.preventDefault();

    this.props.loginForm({
      username: 'Photographer',
      password: 'landscape'
    })
  }
  
  render() {
    // const signUpOption = <span>Don't have an account?</span> <span>{this.props.altLink}</span>;
    // const logInOption = <span> Have an account?</span> <span>{this.props.altLink}</span>;
    // const altOption =  ? signUpOption : logInOption;
    return (
      <div>
        <div className="login-form-container">
          <div className="login-form-image">
            <img src={window.login_imageURL} />
          </div>
        
          <div className="login-form-box">
          
            <form onSubmit={this.handleSubmit} className="login-form">
              <h1>Snapshot</h1>
              <div className="login-form-phrase"> Sign up to see photos and videos from your friends.</div>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
                name="uname"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
                name="psw"
              />
              <div className="session-submit-box">
                <input className="session-submit" type="submit" value={this.props.formType} />
                <button className="session-submit" onClick={this.handleDemoSubmit} >Demo Log In</button>
              </div>
            </form>
            <div className="login-errors">{this.renderErrors()}</div>

            <div className="login-alt-box">
              {this.props.formType === "Log in" ? <span>{"Don't have an account?"}</span> : 
              <span>{"Have an account?"}</span> } <span className="link-container">{this.props.altLink}</span>
            </div >
          </div>
        </div>

      <div className="login-bottom-links">
        <a href="https://github.com/maggiecs">GITHUB</a>
        <a href="https://www.linkedin.com/in/maggie-chen1">LINKEDIN</a>
      </div>
    </div>
      
    );
  }
}

export default SessionForm;