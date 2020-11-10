import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { store } from ".";
import HomePage from "./components/main/HomePage";
import LoginPage from "./components/main/LoginPage";
import MainNavbar from "./components/main/MainNavbar";
import { Provider, useDispatch, useSelector } from "react-redux";
import RegisterPage from "./components/login/RegisterPage";
import ProfilePage from "./components/main/ProfilePage";
import { SettingsContainer } from "./components/main/settings/SettingsContainer";
//import './App.css';
import "./components/mochi/mochispin.scss";
import { ProfileInfo } from "./components/profile/ProfileInfo";

function App() {

  return (
      <BrowserRouter basename="/">
        <MainNavbar />
        {/* Alert Component should go here*/}
        {/* Spinny Mochi guy */}
        <div className="mochi-guy">
          <Switch>
            {<Route path="/register" component={RegisterPage} />}
            {<Route exact path="/" component={HomePage} />}
            {
              <Route
                path="/profile/:userId"
                //let's make a different page for other users if needed but I don't think it will
                component={ProfilePage}
              />
            }
            {<Route path="/profile" component={ProfileInfo} />}
            {<Route exact path="/settings" component={SettingsContainer} />}
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
