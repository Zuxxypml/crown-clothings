import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/shop/shopSelector";
import { useParams } from "react-router-dom";
import CollectionCard from "../CollectionCard/CollectionCard";
import {
  CollectionContainer,
  CollectionItem,
  CollectionItems,
  CollectionTitle,
} from "./Collection.styled";

function Collection({ shopData, animate }) {
  const collections = shopData;
  let params = useParams();
  console.log(params);
  let collectionTitle = collections.find(
    (collection) => collection.title.toLowerCase() === params.collectionId
  );
  console.log(collectionTitle);
  const { title, items } = collectionTitle;
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map((item) => {
          return (
            <CollectionItem>
              <CollectionCard key={item.id} item={item}></CollectionCard>
            </CollectionItem>
          );
        })}
      </CollectionItems>
    </CollectionContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});
export default connect(mapStateToProps)(Collection);
