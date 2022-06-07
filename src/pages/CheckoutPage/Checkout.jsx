import "./Checkout.scss";
import React from "react";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import StripeButton from "../../Components/StripeButton/StripeButton";

function Checkout({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="checkout">
        <StripeButton price={total} />
      </div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
