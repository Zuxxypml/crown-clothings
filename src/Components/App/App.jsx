import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import AuthPage from "../../pages/AuthPage/AuthPage";
import Homepage from "../../pages/HomePage/Homepage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import Header from "../Header/Header";
import "./App.scss";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
