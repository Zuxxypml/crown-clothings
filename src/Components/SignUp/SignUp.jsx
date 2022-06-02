import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./SignUp.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  }

  handleSubmit = async (event) => {
    const { displayName, email, password, repeatPassword } = this.state;
    event.preventDefault();
    if (password !== repeatPassword) {
      alert("passwords don't match");
      return;
    } else {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });
        this.setState({ displayName: "", email: "", password: "" });
      } catch (error) {
        console.log(error);
      }
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, repeatPassword } = this.state;

    return (
      <div className="sign-in">
        <h2>I'm new here</h2>
        <span>Sign up with the required credentials</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            onChange={this.handleChange}
            value={displayName}
            required
            placeholder="Display Name"
            label="displayName"
          />
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            value={email}
            required
            placeholder="Email"
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
            required
            label="password"
          />
          <FormInput
            name="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={this.handleChange}
            placeholder="Repeat Password"
            required
            label="password"
          />
          <div className="button-container">
            <CustomButton
              className="custom-button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Sign in
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
