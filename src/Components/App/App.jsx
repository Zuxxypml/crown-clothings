import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Hatpage from "../../pages/Hatspage/Hatpage";
import Homepage from "../../pages/Homepage/Homepage";
import "./App.scss";
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/shop/hats" element={<Hatpage />}></Route>
      </Routes>
    );
  }
}

export default App;
