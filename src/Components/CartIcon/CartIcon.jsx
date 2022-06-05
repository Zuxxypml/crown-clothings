import { ReactComponent as ShoppingIcon } from "../../Assets/11.3 shopping-bag.svg.svg";
import "./CartIcon.scss";
import React from "react";
import { connect } from "react-redux";
import { toggleHiddenCart } from "../../redux/cart/cartAction";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
function CartIcon({ toggleHiddenCart, itemsCount }) {
  return (
    <div className="cart-icon" onClick={toggleHiddenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart),
});
const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
