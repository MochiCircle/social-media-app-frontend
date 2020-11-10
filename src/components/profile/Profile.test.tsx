import React from "react";
import enzyme, { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Profile } from "./Profile";
import ProfileInfo from "./ProfileInfo";
configure({ adapter: new Adapter() });

it("renders ProfileInfo when given ownProfile=true", () => {
  const profile = shallow(<Profile userId={1} ownProfile={true} />);
  expect(profile.containsMatchingElement(<ProfileInfo />)).toEqual(true);
});
