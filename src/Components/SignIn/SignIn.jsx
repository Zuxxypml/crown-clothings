import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        return user;
      })
      .catch((error) => {
        console.log(error.message);
      });
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
            onChange={this.handleChange}
            value={this.state.email}
            required
            placeholder="Email"
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
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
