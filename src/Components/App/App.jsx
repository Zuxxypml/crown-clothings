import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/HomePage/Homepage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import "./App.scss";
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
      </Routes>
    );
  }
}

export default App;
