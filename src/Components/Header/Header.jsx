import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/4.4 crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectHidden } from "../../redux/cart/cartSelector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
} from "./Header.styled";
function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <Link className="option" to="/shop/shop">
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
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectHidden(state),
});
export default connect(mapStateToProps)(Header);
