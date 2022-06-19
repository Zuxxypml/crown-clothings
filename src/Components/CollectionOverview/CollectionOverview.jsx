import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import { selectShopData } from "../../redux/shop/shopSelector";
import { CollectionOverviewContainer } from "./CollectionOverview.styled";

function CollectionOverview({ shopData }) {
  const collection = shopData;

  return (
    <CollectionOverviewContainer>
      {collection.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </CollectionOverviewContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});
export default connect(mapStateToProps)(CollectionOverview);
