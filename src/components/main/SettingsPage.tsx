import React from "react";
import { Row, Col } from "reactstrap";
import MainNavbar from "./MainNavbar";
import { Profile } from "../profile/Profile";

//Profile page will go where all the vanilla html stuff is now as the side bar for the current user

const SettingsPage = () => {
  return (
    <>
      <MainNavbar />
      <Row>
        <Col md="4">
          <br></br>
          <br></br>
          <Profile userId={-1} ownProfile={true} />
        </Col>
        <Col md="8">
          <br></br>
          <br></br>
          Settings feature
        </Col>
      </Row>
    </>
  );
};

export default SettingsPage;
