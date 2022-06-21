import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";

import { useParams } from "react-router-dom";
import CollectionCard from "../CollectionCard/CollectionCard";
import {
  CollectionContainer,
  CollectionItem,
  CollectionItems,
  CollectionTitle,
} from "./Collection.styled";

function Collection({ shopData, animate, match }) {
  const collection = shopData;
  let params = useParams();

  console.log(params.collectionId);
  const { title, items } = collection;
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

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    shopData: selectCollection(),
  };
};
export default connect(mapStateToProps)(Collection);
