import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  loginOperation,
  registerOperation,
} from "../../redux/auth/AuthOperations";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.props.location.pathname === "/registration") {
      this.props.onRegister(this.state);
    } else this.props.onLogin(this.state);

    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div>
        <h1>RegistrationPage</h1>
        <div>
          <form onSubmit={this.onHandleSubmit} autoComplete="off">
            <label>
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={this.state.email}
                required
                onChange={this.onHandleChange}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="text"
                name="password"
                value={this.state.password}
                required
                onChange={this.onHandleChange}
              />
            </label>

            <button type="submit">
              {this.props.location.pathname === "/registration"
                ? "Register"
                : "Log in"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: registerOperation,
  onLogin: loginOperation,
};

export default connect(null, mapDispatchToProps)(withRouter(AuthForm));
