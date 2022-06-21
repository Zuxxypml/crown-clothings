import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import { selectCollectionForPreview } from "../../redux/shop/shopSelector";
import { CollectionOverviewContainer } from "./CollectionOverview.styled";

function CollectionOverview({ shopData }) {
  const collection = shopData;
  console.log(collection.data());

  return (
    <CollectionOverviewContainer>
      {collection.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </CollectionOverviewContainer>
  );
}
const mapStateToProps = (state) => ({
  shopData: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
