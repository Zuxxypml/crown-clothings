import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButton className="custom-button">CHECKOUT</CustomButton>
    </div>
  );
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
