import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import "./AuthPage.scss";

export default function AuthPage() {
  return (
    <div className="container">
      <SignIn />
      <SignUp />
    </div>
  );
}
