import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "../../Components/Collection/Collection";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";

function ShopPage({ match }) {
  console.log(match);
  return (
    <div>
      <Routes>
        <Route exact path="shop" element={<CollectionOverview />} />
        <Route
          exact
          path=":collectionId"
          element={<Collection animate={true} />}
        />
      </Routes>
    </div>
  );
}

export default ShopPage;
