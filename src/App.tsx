import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/main/HomePage";
import MainNavbar from "./components/main/MainNavbar";
import RegisterPage from "./components/login/RegisterPage";
import ProfilePage from "./components/main/ProfilePage";
import Alert from "./components/alert/alert";
import "./App.scss";
import "./components/mochi/mochispin.scss";
import SettingsContainer from "./components/main/settings/SettingsContainer";
import SpinPage from "./components/login/SpinPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <MainNavbar />
      {/* Alert Component should go here*/}
      {/* Spinny Mochi guy */}
      <div className="mochi-guy" />
      <Alert />
      <div className="mainPage">
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
          {<Route path="/profile" component={ProfilePage} />}
          {<Route exact path="/settings" component={SettingsContainer} />}
          <Route component={SpinPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
