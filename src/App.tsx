import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { NavComp } from './components/NavBarComp';
import HomePage from './components/main/HomePage';
// import { store } from './Store';

function App() {
  return (
    // <Provider store={}>
    <>
      <BrowserRouter basename="/">
        {/* <NavComp /> */}
  
      </BrowserRouter>

      <HomePage/>
    </>
    // </Provider>
  );
}

export default App;