import React from "react";
import { connect } from "react-redux";
import { toggleHiddenCart } from "../../redux/cart/cartAction";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon,
} from "./CartIcon.styled";
function CartIcon({ toggleHiddenCart, itemsCount }) {
  return (
    <CartIconContainer onClick={toggleHiddenCart}>
      <StyledShoppingIcon />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
}
const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart),
});
const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
