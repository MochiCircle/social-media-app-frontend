import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "reactstrap";
import "./App.css";
import { NavComp } from "./components/NavBarComp";
import { store } from "./Store";
import { Profile } from "./components/profile/Profile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <NavComp />
        <Profile userId={1} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
