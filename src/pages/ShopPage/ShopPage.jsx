import { collection, onSnapshot } from "firebase/firestore";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Collection from "../../Components/Collection/Collection";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shopActions";

class ShopPage extends Component {
  unSubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    onSnapshot(collection(db, "collections"), async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
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
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
