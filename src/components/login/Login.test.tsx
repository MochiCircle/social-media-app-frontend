import React from "react";
import enzyme, { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { LoginComp } from "../main/LoginComp";
import MainNavbar from "../main/MainNavbar";
import configureStore from "redux-mock-store";
import ForgotPassComp from "./ForgotPassComp";
import { Provider } from "react-redux";
import { render } from "enzyme";


configure({ adapter: new Adapter() });

it("renders LoginComp when the Main Navbar is rendered", () => {

  const fakeStore = configureStore([]);
  const store = fakeStore({
    id: 5,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    picUrl: "",
    status: "",
    bio: "",
    interests: "",
    posts: null,
    likedPosts: null,
    verified: false
  })

  const mainNav = () => {
      return <Provider store={store} ><MainNavbar /></Provider>
  }

  const actualMainNav = mainNav();
  const mainNavActual = shallow(<Provider store={store} ><MainNavbar /></Provider>);
  expect(mainNavActual.contains(<ForgotPassComp/>)).toEqual(false);
});