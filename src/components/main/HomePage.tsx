import React from "react";
import { Row, Col } from "reactstrap";
import { Profile } from "../profile/Profile";
import PostContainer from "../posts/PostContainer";

//Profile page will go where all the vanilla html stuff is now as the side bar for the current user

const HomePage = () => {
  return (
    <>
      <Row>
        <Col md="4">
          <Profile userId={-1} ownProfile={true} />
        </Col>
        <Col md="8">
          <PostContainer loadType={true} userId={1} />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
