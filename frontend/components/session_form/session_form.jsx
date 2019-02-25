import React from 'react';
import Footer from '../footer/footer';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', full_name: '', username: '', password: ''};
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
      email: "demouser@gmail.com",
      full_name: "Demo User",
      username: 'DemoUser',
      password: 'welcometosnapshot'
    })
  }
  
  render() {
    return (
      <div>
        <div className="login-form-container">
          <div className="login-form-box">
          
            <form onSubmit={this.handleSubmit} className="login-form">
              <h1 className="main-title">Snapshot</h1>

              {this.props.formType === "Sign up" ? 
              <div className="login-form-phrase"> Sign up to see photos from your friends.</div> :
              <div></div>}

              <div className="login-input-container">
                {this.props.formType === "Sign up" ?
                <div>
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="login-input"
                      placeholder="Email"
                    />
                    <input type="text"
                      value={this.state.full_name}
                      onChange={this.update('full_name')}
                      className="login-input"
                      placeholder="Full Name"
                    />
                  </div> : <div></div>}
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
              </div>
              <div className="session-submit-box">
                <input className="session-submit" type="submit" value={this.props.formType} 
                disabled={!this.state.username && this.props.formType === "Log in"}/>
                <button className="session-submit" onClick={this.handleDemoSubmit} >Demo Log In</button>
              </div>
              <div className="login-errors">{this.renderErrors()}</div>
            </form>
            

            <div className="login-alt-box">
              {this.props.formType === "Log in" ? <span>{"Don't have an account?"}</span> : 
              <span>{"Have an account?"}</span> } <span className="login-link-container">{this.props.altLink}</span>
            </div >
          </div>
        </div>

        <Footer />
      </div>
    
      
    
      
    );
  }
}

export default SessionForm;