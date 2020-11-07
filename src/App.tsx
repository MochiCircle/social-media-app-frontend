import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './App.css';
import "./components/mochi/mochispin.scss";
import Layout from './Layout';
import HomePage from './components/main/HomePage';
import LoginPage from './components/main/LoginPage';
import MyPage from './components/main/MyPage';
import SettingsPage from './components/main/SettingsPage';
import Post from './components/posts/Posts';
import MainNavbar from './components/main/MainNavbar';
import { Provider } from 'react-redux';
import { store } from '.';
import RegisterPage from './components/login/RegisterPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter
      basename="/">
        <MainNavbar />
        {/* Alert Component */}
        {/* Spinny Mochi guy */}
        <div className="mochi-guy">
        <Switch>
        {
          <Route
            exact path ="/"
            component={LoginPage}
          />
        }
        {
          <Route
            path ="/register"
            component={RegisterPage}
          />
        }
        {
          <Route
            path ="/home"
            component={HomePage}
          />
        }
        {
          <Route
            path ="/my-page"
            //let's make a different page for other users if needed but I don't think it will
            component={MyPage}
          />
        }  
        {
          <Route
            exact path ="/settings"
            component={SettingsPage}
          />
        }  
      </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;