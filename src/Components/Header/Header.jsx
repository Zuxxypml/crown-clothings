import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../Assets/4.4 crown.svg";
import { auth } from "../../firebase/firebase.utils";

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <Link
            className="option"
            onClick={() => {
              auth.signOut();
            }}
            to="/"
          >
            Sign out
          </Link>
        ) : (
          <Link className="option" to="/auth">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}
