import { ReactComponent as ShoppingIcon } from "../../Assets/11.3 shopping-bag.svg.svg";
import "./CartIcon.scss";
import React from "react";
import { connect } from "react-redux";
import { toggleHiddenCart } from "../../redux/cart/cartAction";
function CartIcon({ toggleHiddenCart }) {
  return (
    <div className="cart-icon" onClick={toggleHiddenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">07</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart),
});

export default connect(null, mapDispatchToProps)(CartIcon);
