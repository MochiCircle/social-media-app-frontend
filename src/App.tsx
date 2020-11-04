import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { NavComp } from './components/NavBarComp';
import Layout from './Layout';
import LoginNavbar from './components/main/LoginNavbar';
import HomePage from './components/main/HomePage';
// import { store } from './Store';

function App() {
  return (
    <Layout>
      <LoginNavbar/>
      <HomePage/>
    </Layout>
  );
}

export default App;


// function App() {
//   return (
//     // <Provider store={}>
//       // <BrowserRouter basename="/">
//         {/* <NavComp /> */}
//         <Layout>
//           <LoginNavbar/>

//           <HomePage/>
// </Layout>



//       {/* </BrowserRouter> */}

//     {/* // </Provider> */}
//   );
// }
