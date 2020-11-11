import React from "react";
import { Col, Row } from "reactstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Profile } from "../profile/Profile";
import { connect } from "react-redux";
import { user } from "../../util/Models";
import PostContainer from "../posts/PostContainer";
import PostCreate from "../posts/PostCreate";

interface MatchParams {
  userId?: string;
}

interface IProp extends RouteComponentProps<MatchParams>, user {}

const ProfilePage: React.FC<IProp> = (props: IProp) => {
  let userId = parseInt(props.match.params.userId || "0") || 0;
  let ownProfile: boolean = false;
  if (userId === 0) {
    userId = props.userId;
    ownProfile = true;
  }

  return (
    <Row>
      <Col md="4">
        <Profile userId={userId} ownProfile={ownProfile} />
      </Col>
      <Col md="8">
        {ownProfile && <PostCreate />}
        <PostContainer loadType={false} userId={userId} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (appState: any) => {
  return {
    userId: appState.loginState.id,
    username: appState.loginState.username,
    password: appState.loginState.password,
    firstName: appState.loginState.firstname,
    lastName: appState.loginState.lastname,
    email: appState.loginState.email,
    pic: appState.loginState.picUrl,
    status: appState.loginState.status,
    bio: appState.loginState.bio,
    interests: appState.loginState.interests,
    verified: appState.loginState.verified,
  };
};

export default withRouter(connect<user>(mapStateToProps)(ProfilePage));
