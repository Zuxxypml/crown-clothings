import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cartAction";
import {
  CheckoutItemImage,
  CheckoutItemImageContainer,
  CheckoutItemContainer,
  CheckoutItemName,
  CheckoutItemQuantity,
  CheckoutItemArrow,
  CheckoutItemPrice,
  CheckoutItemRemoveButton,
} from "./CheckoutItem.styled";

function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={imageUrl} alt={imageUrl} />
      </CheckoutItemImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <CheckoutItemArrow
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </CheckoutItemArrow>
        {quantity}
        <CheckoutItemArrow
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </CheckoutItemArrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>${price}</CheckoutItemPrice>
      <CheckoutItemRemoveButton
        onClick={() => {
          clearItem(cartItem);
        }}
      >
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
}
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
