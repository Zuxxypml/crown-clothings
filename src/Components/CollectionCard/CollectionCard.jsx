import React from "react";
import { addItem } from "../../redux/cart/cartAction";
import { connect } from "react-redux";
import {
  CollectionCardContainer,
  CollectionCardImage,
  CollectionCardFooterContainer,
  CollectionCardItemName,
  CollectionCardItemPrice,
  CollectionCardOverlayButton,
} from "./CollectionCard.styled";
function CollectionCard({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <CollectionCardContainer>
      <CollectionCardImage src={imageUrl} />

      <CollectionCardFooterContainer>
        <CollectionCardItemName>{name}</CollectionCardItemName>
        <CollectionCardItemPrice>${price}</CollectionCardItemPrice>
      </CollectionCardFooterContainer>
      <CollectionCardOverlayButton
        inverted
        onClick={() => {
          addItem(item);
        }}
      >
        Add to Cart
      </CollectionCardOverlayButton>
    </CollectionCardContainer>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionCard);
