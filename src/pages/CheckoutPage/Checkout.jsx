import React from "react";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import StripeButton from "../../Components/StripeButton/StripeButton";
import {
  CheckoutPageContainer,
  CheckoutPageHeader,
  CheckoutPageHeaderBlock,
  CheckoutPageTotal,
} from "./Checkout.styled";

function Checkout({ cartItems, total }) {
  return (
    <CheckoutPageContainer>
      <CheckoutPageHeader>
        <CheckoutPageHeaderBlock>
          <span>Product</span>
        </CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>
          <span>Description</span>
        </CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>
          <span>Quantity</span>
        </CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>
          <span>Price</span>
        </CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>
          <span>Remove</span>
        </CheckoutPageHeaderBlock>
      </CheckoutPageHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutPageTotal>
        <span>TOTAL: ${total}</span>
      </CheckoutPageTotal>
      <div className="checkout">
        <StripeButton price={total} />
      </div>
    </CheckoutPageContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
