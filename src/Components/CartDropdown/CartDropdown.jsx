import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleHiddenCart } from "../../redux/cart/cartAction";
import { selectCartItems } from "../../redux/cart/cartSelector";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";

function CartDropdown({ cartItems, dispatch }) {
  let navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        className="custom-button"
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleHiddenCart)
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
