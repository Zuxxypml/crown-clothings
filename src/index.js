import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
