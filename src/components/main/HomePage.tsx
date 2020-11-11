import React from "react";
import { Row, Col } from "reactstrap";
import MainNavbar from "./MainNavbar";
import { Profile } from "../profile/Profile";

//Profile page will go where all the vanilla html stuff is now as the side bar for the current user

const HomePage = () => {
  return (
    <>
      <Row>
        <Col md="4">
          <br></br>
          <br></br>
          <Profile userId={1} />
        </Col>
        <Col md="8">
          <br></br>
          <br></br>
          All Posts Column ... will have one route for all posts from all users
          and one route for just posts from current user ... with conditional
          logic of course :)
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
