import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Profile } from "../../profile/Profile";
import ProfileInfo from "../../profile/ProfileInfo";
import BasicInfoForm from "./forms/BasicInfoForm";
import { Settings } from "./Settings";
import SettingsContainer from "./SettingsContainer";

configure({ adapter: new Adapter() });

it("renders ProfileInfo when given ownProfile=true", () => {
  const profile = shallow(<Profile userId={1} ownProfile={true} />);
  expect(profile.containsMatchingElement(<ProfileInfo />)).toEqual(true);
});

it("renders settings when logged in", () => {
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
  });

  const settings = () => {
    return <Provider store={store} ><SettingsContainer/></Provider>
  }

  const actualSettings = settings();
  const settingsActual = shallow(actualSettings);
  expect(settingsActual.contains(<BasicInfoForm />)).toEqual(false);
});

it("renders a div", () => {
  const settings = shallow(<Settings id={2} />);
  expect(settings.contains(2)).toEqual(true);
});