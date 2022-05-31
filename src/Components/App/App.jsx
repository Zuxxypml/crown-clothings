import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import Homepage from "../../pages/HomePage/Homepage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import "./App.scss";
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    );
  }
}

export default App;
