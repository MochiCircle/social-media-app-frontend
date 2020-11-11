import React, { useState } from "react";
import { Profile, user } from "../../util/Models";
import "./Profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser as users,
  faEdit as edit,
  faSave as save,
} from "@fortawesome/free-regular-svg-icons";
import { Button, Form, Input } from "reactstrap";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { setLoginState } from "../../actions/LoginAction";
import { axiosInstance } from "../../util/axiosConfig";

const ProfileInfo: React.FC<user> = (props: user) => {
  const [statusEditor, setStatusEditor] = useState(false);
  const currentStatus = props.status;
  const [status, setStatus] = useState(currentStatus);

  const openStatusEditor = (event: React.SyntheticEvent<SVGSVGElement>) => {
    setStatusEditor(!statusEditor);
  };

  // Setting the state
  const updateState = (user: any) => {
    dispatch(setLoginState(user));
  };

  const dispatch = useDispatch();

  // end

  const saveStatus = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newStatus = event.currentTarget["status"].value;
    console.log(newStatus);

    const response = await axiosInstance.post("/users/status/", {
      userId: props.userId,
      status: newStatus,
    });

    const userObject: user = {
      userId: props.userId,
      username: props.username,
      password: props.password,
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      pic: props.pic,
      status: response.data,
      bio: props.bio,
      interests: props.interests,
      verified: props.verified,
    };

    updateState(userObject);

    setStatus(newStatus);
    setStatusEditor(false);
  };

  if (!props) return <p>No User Found</p>;
  return (
    <div className="profile">
      {props.pic && (
        <img className="pic" src={props.pic} alt="Profile Pic"></img>
      )}
      <div className="name">
        {" "}
        <FontAwesomeIcon icon={users} pull="left" />{" "}
        {props.firstName + " " + props.lastName}
      </div>
      <div className="status">
        {!statusEditor ? (
          props.status
        ) : (
          <Form onSubmit={saveStatus}>
            <Input name="status" placeholder={status}></Input>
            <Button type="submit">
              <FontAwesomeIcon icon={save} />
            </Button>
          </Form>
        )}
        <FontAwesomeIcon
          icon={edit}
          style={{ display: "inline", marginLeft: "5px", cursor: "pointer" }}
          onClick={openStatusEditor}
        />
      </div>

      <div className="category">Bio</div>
      <div className="bio">{props.bio}</div>
      <div className="category">Interests</div>
      <div className="interest">{props.interests}</div>
    </div>
  );
};

//recieves these values from the app's store
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

//HRO export right here
export default connect<user>(mapStateToProps)(ProfileInfo);
