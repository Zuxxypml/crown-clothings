import "./CollectionCard.scss";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../redux/cart/cartAction";
import { connect } from "react-redux";

function CollectionCard({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        className="inverted"
        onClick={() => {
          addItem(item);
        }}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionCard);
