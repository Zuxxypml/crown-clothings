import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="password"
          />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
