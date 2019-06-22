import React from "react";

class SignInForm extends React.PureComponent {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.signIn(this.state.email, this.state.password);
  };

  render() {
    return (
      <form className="bg-white side-margin p-60" onSubmit={this.handleSubmit}>
        <div>
          <p className="blue-font">
            You need to be logged in as an admin to see this page
          </p>
          <label className="font-weight-bold" htmlFor="signInEmail" />
          <input
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
            value={this.state.email}
            type="text"
            id="signInEmail"
            name="signInEmail"
            placeholder="Email"
          />
          <label className="font-weight-bold" htmlFor="signInPassword" />
          <input
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
            value={this.state.password}
            type="password"
            id="signInPassword"
            name="signInPassword"
            placeholder="Password"
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

export default SignInForm;
