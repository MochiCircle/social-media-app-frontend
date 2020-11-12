import React from "react";
import { Col, Row } from "reactstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Profile } from "../profile/Profile";
import { connect } from "react-redux";
import { userCorrected } from "../../util/Models";
import PostContainer from "../posts/PostContainer";
import PostCreate from "../posts/PostCreate";

interface MatchParams {
  userId?: string;
}

interface IProp extends RouteComponentProps<MatchParams>, userCorrected {}

const ProfilePage: React.FC<IProp> = (props: IProp) => {
  let userId = parseInt(props.match.params.userId || "0") || 0;
  let ownProfile: boolean = false;
  if (userId === 0) {
    userId = props.id;
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
    id: appState.loginState.id,
    username: appState.loginState.username,
    password: appState.loginState.password,
    firstname: appState.loginState.firstname,
    lastname: appState.loginState.lastname,
    email: appState.loginState.email,
    picUrl: appState.loginState.picUrl,
    status: appState.loginState.status,
    bio: appState.loginState.bio,
    interests: appState.loginState.interests,
    verified: appState.loginState.verified,
  };
};

export default withRouter(connect<userCorrected>(mapStateToProps)(ProfilePage));
