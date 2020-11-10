import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import './App.css';
import "./components/mochi/mochispin.scss";
import Layout from "./Layout";
import HomePage from "./components/main/HomePage";
import LoginPage from "./components/main/LoginPage";
import SettingsPage from "./components/main/SettingsPage";
import Post from "./components/posts/Posts";
import MainNavbar from "./components/main/MainNavbar";
import { Provider, useDispatch, useSelector } from "react-redux";
import RegisterPage from "./components/login/RegisterPage";
import ProfilePage from "./components/main/ProfilePage";
import SpinPage from "./components/login/SpinPage";

function App() {

  return (
      <BrowserRouter basename="/">
        <MainNavbar />
        {/* Alert Component should go here*/}
        {/* Spinny Mochi guy */}
        
          <Switch>
            {<Route path="/spin" component={SpinPage} />}
            {<Route path="/register" component={RegisterPage} />}
            {<Route exact path="/" component={HomePage} />}
            {
              <Route
                path="/profile/:userId"
                //let's make a different page for other users if needed but I don't think it will
                component={ProfilePage}
              />
            }
            {<Route path="/profile" component={ProfilePage} />}
            {<Route exact path="/settings" component={SettingsPage} />}
          </Switch>
      </BrowserRouter>
  );
}

export default App;
