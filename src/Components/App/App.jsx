import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  addCollectionAndItem,
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import AuthPage from "../../pages/AuthPage/AuthPage";
import Checkout from "../../pages/CheckoutPage/Checkout";
import IndexPage from "../../pages/IndexPage/IndexPage";

import ShopPage from "../../pages/ShopPage/ShopPage";
import { selectShopData } from "../../redux/shop/shopSelector";
import { setCurrentUser } from "../../redux/user/userActions";
import Header from "../Header/Header";
import "./App.scss";
class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userSnap = await createUserProfileDocument(userAuth);
        setCurrentUser({
          currentUser: {
            id: userSnap.id,
            ...userSnap.data(),
          },
        });
      }
      setCurrentUser(userAuth);
      if (collectionsArray) {
        addCollectionAndItem(
          "collections",
          collectionsArray.map(({ title, items }) => ({ title, items }))
        );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/shop/*" element={<ShopPage />} />
          <Route exact path="/" element={<IndexPage />} />

          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            exact
            path="/auth"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <AuthPage />
            }
          />
        </Routes>
      </div>
    );
  }
}
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
//   collectionsArray: selectShopData,
// });
const mapStateToProps = createStructuredSelector({
  collectionsArray: selectShopData,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
