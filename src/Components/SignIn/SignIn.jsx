import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { signInWithGoogle } from "../../firebase/firebase.utils";
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
            placeholder="Email"
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            placeholder="Password"
            required
            label="password"
          />
          <div className="button-container">
            <CustomButton className="custom-button" type="submit">
              Sign in
            </CustomButton>
            <CustomButton className="google" onClick={signInWithGoogle}>
              with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
