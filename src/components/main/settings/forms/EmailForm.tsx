import axios from 'axios';
import React, { SyntheticEvent, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { Form, Input, Spinner } from "reactstrap";
import { setLoginState } from '../../../../actions/LoginAction';
import { axiosInstance } from '../../../../util/axiosConfig';
import { userCorrected } from '../../../../util/Models';
import '../settings.scss';

const EmailForm: React.FC<userCorrected> = (props: userCorrected) => {
    // Setting the state
    const updateState = (user: any) => {
      dispatch(setLoginState(user));
    };
  
    const dispatch = useDispatch();
    // end

    const [showSpinner, setSpinner] = useState(false);

  const updateEmail = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSpinner(true);
    const emailF = event.currentTarget["email"].value;

    const response = await axiosInstance.post(
      "/users/updateEmail/",
      {
        userId: props.id,
        username: null,
        password: null,
        firstName: null,
        lastName: null,
        email: emailF,
        pic: null,
        status: null,
        bio: null,
        interests: null,
      }
    );

    const userObject: userCorrected = {
      id: props.id,
      username: props.username,
      password: props.password,
      firstname: props.firstname,
      lastname: props.lastname,
      email: emailF,
      picUrl: props.picUrl,
      status: props.status,
      bio: props.bio,
      interests: props.interests,
      verified: props.verified,
    };

    setSpinner(false);
    updateState(userObject);

    const json = response.data;
    if(json.email===emailF) {
      alert("Email successfully changed!");
    } else {
      alert("Sorry, but it seems like that email is in use!");
    }
  };

  return (
    <div>
      <h3>Email {showSpinner ? <Spinner color="primary"/> : <span/>}</h3>
      <Form onSubmit={updateEmail} className="settingsBox" method="POST">
        <div className="whiteText" >Email</div>
        <Input type='email' name='email' required placeholder='Email address' />
        <br/>
        <Input type='submit' value='Send email' className="btn btn-primary col-6" />
      </Form>
  </div>
  );
};

//recieves these values from the app's store
const mapStateToProps = (appState:any) => {
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
}

//HRO export right here
export default connect<userCorrected>(mapStateToProps)(EmailForm);