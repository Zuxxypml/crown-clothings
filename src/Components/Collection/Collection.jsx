import "./Collection.scss";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/shop/shopSelector";
import { useParams } from "react-router-dom";
import CollectionCard from "../CollectionCard/CollectionCard";

function Collection({ shopData, animate }) {
  const collections = shopData;
  let params = useParams();
  console.log(params);
  let gg = collections.find(
    (collection) => collection.title.toLowerCase() === params.collectionId
  );
  console.log(gg);
  const { title, items } = gg;
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => {
          return (
            <div className="collection-item">
              <CollectionCard key={item.id} item={item}></CollectionCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});
export default connect(mapStateToProps)(Collection);
