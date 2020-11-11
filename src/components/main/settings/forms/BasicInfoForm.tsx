import React, { SyntheticEvent, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Form, Input, Label } from "reactstrap";
import { setLoginState } from "../../../../actions/LoginAction";
import { axiosInstance } from "../../../../util/axiosConfig";
import { user } from "../../../../util/Models";
import "../settings.scss";

const BasicInfoForm: React.FC<user> = (props: user) => {
  // Setting the state
  const updateState = (user: any) => {
    dispatch(setLoginState(user));
  };

  const dispatch = useDispatch();
  // end

  const [usernameS, setUsernameS] = useState(props.username);
  const [firstnameS, setfirstnameS] = useState(props.firstName);
  const [lastnameS, setlastnameS] = useState(props.lastName);
  const [bioS, setbioS] = useState(props.bio);
  const [interestsS, setinterestsS] = useState(props.interests);

  const updateBasicInfo = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("userId", `${props.userId}`);
    formData.append("image", event.currentTarget["imageF"].files[0]);

    const usernameF = event.currentTarget["username"].value;
    const firstNameF = event.currentTarget["firstName"].value;
    const lastNameF = event.currentTarget["lastName"].value;
    const userBioF = event.currentTarget["userBio"].value;
    const userInterestsF = event.currentTarget["userInterests"].value;

    formData.append("username", usernameF);
    formData.append("firstName", firstNameF);
    formData.append("lastName", lastNameF);
    formData.append("bio", userBioF);
    formData.append("interests", userInterestsF);

    let response: any;

    if (event.currentTarget["imageF"].files[0] === undefined) {
      alert("Please update your image.");
    } else {
      // <Spinner color='success' />
      // document.getElementById("reimbTableBody").append(tr);
      response = await axiosInstance.post("/users/updateBasic", formData);

      const userObject: user = {
        userId: props.userId,
        username: usernameF,
        password: props.password,
        firstName: firstNameF,
        lastName: lastNameF,
        email: props.email,
        pic: props.pic,
        status: props.status,
        bio: userBioF,
        interests: userInterestsF,
        verified: props.verified,
      };

      updateState(userObject);

      const json = response.data;
      console.log(json);
      if (json.username === usernameF) {
        alert("Info successfully updated!");
      } else {
        alert("Sorry, but it seems like that username is already taken!");
      }
    }
  };

  function handleUsername(e: any) {
    setUsernameS(e.target.value);
  }
  function handleFirstname(e: any) {
    setfirstnameS(e.target.value);
  }
  function handleLastname(e: any) {
    setlastnameS(e.target.value);
  }
  function handleBio(e: any) {
    setbioS(e.target.value);
  }
  function handleInterests(e: any) {
    setinterestsS(e.target.value);
  }

  return (
    <div>
      <h3>Basic Info{/* <Spinner color='warning' /> */}</h3>
      <Form onSubmit={updateBasicInfo} className="settingsBox" method="POST">
        {props.pic && (
          <img className="pic" src={props.pic} alt="Profile Pic"></img>
        )}
        <br />
        <Label className="whiteText">Select a new profile picture:</Label>
        <Input
          className="greenText"
          type="file"
          name="imageF"
          id="exampleFile"
        />
        <br />
        <div className="whiteText">Username</div>
        <Input
          type="text"
          name="username"
          required
          placeholder="username"
          value={usernameS}
          onChange={handleUsername}
        />
        <br />
        <div className="whiteText">First Name</div>
        <Input
          type="text"
          name="firstName"
          required
          placeholder={"first name"}
          value={firstnameS}
          onChange={handleFirstname}
        />
        <br />
        <div className="whiteText">Last Name</div>
        <Input
          type="text"
          name="lastName"
          required
          placeholder="last name"
          value={lastnameS}
          onChange={handleLastname}
        />
        <br />
        <div className="whiteText">Interests</div>
        <Input
          type="text"
          name="userInterests"
          placeholder="List some cool interests, comma separated"
          value={interestsS}
          onChange={handleInterests}
        />
        <br />
        <div className="whiteText">Bio</div>
        <Input
          type="textarea"
          rows={4}
          name="userBio"
          placeholder="Tell us about yourself!"
          value={bioS}
          onChange={handleBio}
        />
        <br />
        <Input
          type="submit"
          value="Save changes"
          className="btn btn-success col-6"
        />
      </Form>
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
export default connect<user>(mapStateToProps)(BasicInfoForm);
