import React from "react";
import { Row, Col } from "reactstrap";
import { Profile } from "../profile/Profile";
import PostContainer from "../posts/PostContainer";
import { connect, useDispatch } from "react-redux";
import { setLoginState } from "../../actions/LoginAction";

interface IProps {
  userId: number;
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

//Profile page will go where all the vanilla html stuff is now as the side bar for the current user

const HomePage: React.FC<IProps> = (props: IProps) => {
  // Setting the state
  const updateState = (user: any) => {
    dispatch(setLoginState(user));
  };

  const dispatch = useDispatch();

  if (props.userId == 0) {
    window.location.href = "/spin";
  } else {
    updateState({
      userId: props.userId,
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
  }

  return (
    <>
      <Row>
        <Col md="4">
          <Profile userId={-1} ownProfile={true} />
        </Col>
        <Col md="8">
          <PostContainer
            loadType={true}
            userId={1}
            loggedInUserId={props.userId}
          />
        </Col>
      </Row>
    </>
  );
};

//recieves these values from the app's store
const mapStateToProps = (appState: any) => {
  return {
    userId: appState.loginState.id,
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

//HOC export right here babyyy
export default connect<IProps>(mapStateToProps)(HomePage);
