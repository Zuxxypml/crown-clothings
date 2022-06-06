import "./CollectionOverview.scss";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import { selectShopData } from "../../redux/shop/shopSelector";

function CollectionOverview({ shopData }) {
  const collection = shopData;

  return (
    <div className="collections-overview">
      <h1>Collections</h1>
      {collection.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});
export default connect(mapStateToProps)(CollectionOverview);
