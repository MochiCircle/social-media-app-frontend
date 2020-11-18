import React from "react";
import { Col, Row } from "reactstrap";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Profile } from "../profile/Profile";
import { connect, useDispatch } from "react-redux";
import { userCorrected } from "../../util/Models";
import PostContainer from "../posts/PostContainer";
import PostCreate from "../posts/PostCreate";
import { setLoginState } from "../../actions/LoginAction";

interface MatchParams {
  userId: string;
}

interface IProp extends RouteComponentProps<MatchParams>, userCorrected {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  picUrl: string;
  status: string;
  bio: string;
  interests: string;
  verified: boolean;
}

const ProfilePage: React.FC<IProp> = (props: IProp) => {
  // Setting the state
  const updateState = (user: any) => {
    dispatch(setLoginState(user));
  };

  const dispatch = useDispatch();

  let userId = parseInt(props.match.params.userId || "0") || 0;
  let ownProfile: boolean = false;
  if (userId === 0) {
    userId = props.id;
    ownProfile = true;
    //window.location.href="/spin";
  }

  updateState({
    username: props.username,
    password: props.password,
    firstname: props.firstname,
    lastname: props.lastname,
    email: props.email,
    picUrl: props.picUrl,
    status: props.status,
    bio: props.bio,
    interests: props.interests,
    verified: props.verified,
  });
  return (
    <Row>
      <Col md="4">
        <Profile userId={userId} ownProfile={ownProfile} />
      </Col>
      <Col md="8">
        {ownProfile && <PostCreate />}
        <PostContainer
          loadType={false}
          userId={userId}
          loggedInUserId={props.id}
        />
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
