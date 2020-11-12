import React from "react";
import { Row, Col } from "reactstrap";
import { Profile } from "../profile/Profile";
import PostContainer from "../posts/PostContainer";
import { connect } from "react-redux";

interface IProps{
  userId:number
}

//Profile page will go where all the vanilla html stuff is now as the side bar for the current user

const HomePage: React.FC<IProps> = (props:IProps) => {
  
  if (props.userId == 0)
  {
    window.location.href="/spin";
  }
  
  return (
    <>
      <Row>
        <Col md="4">
          <Profile userId={1} ownProfile={true} />
        </Col>
        <Col md="8">
          <PostContainer loadType={true} userId={1} />
        </Col>
      </Row>
    </>
  );
};

//recieves these values from the app's store
const mapStateToProps = (appState:any) => {
  return {
      userId: appState.loginState.id,
  }
}

//HOC export right here babyyy
export default connect<IProps>(mapStateToProps)(HomePage);
