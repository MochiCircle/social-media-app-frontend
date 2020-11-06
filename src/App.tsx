import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { LoginComp } from './components/login/LoginComp';
import { NavComp } from './components/login/NavBarComp';
import { store } from './Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter
      basename="/" >
        {/* Nav bar goes here */}
        <LoginComp />
        <Switch>
          <Route exact path="/" />
          <Route path="/register" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;