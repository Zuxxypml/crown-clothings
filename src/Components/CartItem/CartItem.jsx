import React from "react";
import {
  CartItemContainer,
  CartItemDetails,
  CartItemImage,
  CartItemName,
} from "./CartItem.styled";

function CartItem({ item: { imageUrl, name, price, quantity } }) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
