import React, { SyntheticEvent, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Form, Input, Label, Spinner } from "reactstrap";
import { setLoginState } from "../../../../actions/LoginAction";
import { axiosInstance } from "../../../../util/axiosConfig";
import { userCorrected } from "../../../../util/Models";
import { setAlert, ISetAlert } from "../../../../actions/AlertAction";
import "../settings.scss";

const BasicInfoForm: React.FC<userCorrected & ISetAlert> = (
  props: userCorrected & ISetAlert
) => {
  // Setting the state
  const updateState = (user: any) => {
    dispatch(setLoginState(user));
  };

  const dispatch = useDispatch();
  // end

  const [showSpinner, setSpinner] = useState(false);
  // const [isVerified, setVerified] = useState(true);
  const [usernameS, setUsernameS] = useState(props.username);
  const [firstnameS, setfirstnameS] = useState(props.firstname);
  const [lastnameS, setlastnameS] = useState(props.lastname);
  const [bioS, setbioS] = useState(props.bio);
  const [interestsS, setinterestsS] = useState(props.interests);
  const [pic, setPic] = useState(props.picUrl);

  const updateBasicInfo = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSpinner(true);
    const formData = new FormData();
    formData.append("userId", `${props.id}`);

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

    if (event.currentTarget["imageF"].files[0] !== undefined) {
      formData.append("image", event.currentTarget["imageF"].files[0]);
    }

    response = await axiosInstance.post("/users/updateBasic", formData);

    const userObject: userCorrected = {
      id: props.id,
      username: usernameF,
      password: props.password,
      firstname: firstNameF,
      lastname: lastNameF,
      email: props.email,
      picUrl: response.data.picUrl,
      status: props.status,
      bio: userBioF,
      interests: userInterestsF,
      verified: props.verified,
    };

    setSpinner(false);
    updateState(userObject);

    const json = response.data;
    console.log(json);
    if (json.username === usernameF) {
      props.setAlert("Info successfully updated!", "success", 10000);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    } else {
      props.setAlert(
        "Sorry, but it seems like that username is already taken!",
        "warning",
        10000
      );
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  };

  const imagePreview = (event: SyntheticEvent<HTMLInputElement>) => {
    if (event.currentTarget.files !== null) {
      setPic(URL.createObjectURL(event.currentTarget.files[0]));
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
      <h3>
        {props.verified ? (
          <span className="greenText">
            <b>This user is verified!</b>
          </span>
        ) : (
          <span className="redText">
            <b>Please verify your account!</b>
          </span>
        )}{" "}
        {showSpinner ? <Spinner color="primary" /> : <span />}
      </h3>
      <Form onSubmit={updateBasicInfo} className="settingsBox" method="POST">
        {pic && <img className="picView" src={pic} alt="Profile Pic"></img>}
        <br />
        <Label className="whiteText">Select a new profile picture:</Label>
        <Input
          className="greenText"
          type="file"
          name="imageF"
          id="exampleFile"
          onChange={imagePreview}
        />
        <br />
        <div className="whiteText">Username</div>
        <Input
          type="text"
          name="username"
          className="textEntry"
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
          className="textEntry"
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
          className="textEntry"
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
          className="textEntry"
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
          className="textEntry"
          placeholder="Tell us about yourself!"
          value={bioS}
          onChange={handleBio}
        />
        <br />
        <Input
          type="submit"
          value={"Save changes"}
          className="btn btn-success col-6"
        />
        <span> </span>
        {showSpinner ? <Spinner color="success" /> : <span />}
      </Form>
    </div>
  );
};

//recieves these values from the app's store
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

const mapDispatchToProps = {
  setAlert: setAlert,
};

//HRO export right here
export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoForm);
