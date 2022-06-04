import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton className="custom-button">CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
