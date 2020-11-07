import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './NewApp.css';
import Layout from './Layout';
import HomePage from './components/main/HomePage';
import LoginPage from './components/main/LoginPage';
import MyPage from './components/main/MyPage';
import SettingsPage from './components/main/SettingsPage';
import MainNavbar from './components/main/MainNavbar';

function App() {
  return (
    <Layout>
      <MainNavbar />
      <Switch>
        {
          <Route
            exact path ="/"
            component={LoginPage}
          />
        }
        {
          <Route
            exact path ="/home-page/:logged-in-user-id"
            component={HomePage}
          />
        }
        {
          <Route
            exact path ="/my-page/:logged-in-user-or-other-user-id"
            //let's make a different page for other users if needed but I don't think it will
            component={MyPage}
          />
        }  
        {
          <Route
            exact path ="/settings/:logged-in-user-id"
            component={SettingsPage}
          />
        }  
      </Switch> 
    </Layout>
  );
}

export default App;