import React from "react";
import { Col, Row } from "reactstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Profile } from "../profile/Profile";

interface MatchParams {
  userId?: string;
}

interface IProp extends RouteComponentProps<MatchParams> {}

const ProfilePage: React.FC<IProp> = (props: IProp) => {
  const userId = parseInt(props.match.params.userId || "0") || 0;

  return (
    <Row>
      <Col md="4">
        <Profile userId={userId} />
      </Col>
      <Col md="8">
        All Posts Column ... will have one route for all posts from all users
        and one route for just posts from current user ... with conditional
        logic of course :)
      </Col>
    </Row>
  );
};

export default withRouter(ProfilePage);
