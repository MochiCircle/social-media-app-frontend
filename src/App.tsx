import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { store } from ".";
import RegisterPage from "./components/login/RegisterPage";
import HomePage from "./components/main/HomePage";
import LoginPage from "./components/main/LoginPage";
import MainNavbar from "./components/main/MainNavbar";
import ProfilePage from "./components/main/ProfilePage";
import { SettingsContainer } from "./components/main/settings/SettingsContainer";
//import './App.css';
import "./components/mochi/mochispin.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <MainNavbar />
        {/* Alert Component */}
        {/* Spinny Mochi guy */}
        <div className="mochi-guy">
          <Switch>
            {<Route exact path="/" component={LoginPage} />}
            {<Route path="/register" component={RegisterPage} />}
            {<Route path="/home" component={HomePage} />}
            {
              <Route
                path="/profile/:userId"
                //let's make a different page for other users if needed but I don't think it will
                component={ProfilePage}
              />
            }
            {<Route path="/profile" component={ProfilePage} />}
            {<Route exact path="/settings" component={SettingsContainer} />}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
