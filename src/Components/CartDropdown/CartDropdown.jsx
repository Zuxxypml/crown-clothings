import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleHiddenCart } from "../../redux/cart/cartAction";
import { selectCartItems } from "../../redux/cart/cartSelector";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import {
  BottomButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./CartDropdown.styled";
function CartDropdown({ cartItems, dispatch }) {
  let navigate = useNavigate();
  return (
    <CartDropdownContainer>
      <CartItemsContainer className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <EmptyMessageContainer className="empty-message">
            Your cart is empty
          </EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <BottomButton></BottomButton>
      <bottomPlacer>
        <CustomButton
          className="custom-button"
          onClick={() => {
            navigate("/checkout");
            dispatch(toggleHiddenCart);
          }}
        >
          CHECKOUT
        </CustomButton>
      </bottomPlacer>
    </CartDropdownContainer>
  );
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
