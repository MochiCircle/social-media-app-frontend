import axios from "axios";
import React, { SyntheticEvent, useEffect } from "react";
import { Form, Input, Spinner } from "reactstrap";
import { user } from "../../../../util/Models";
import "../settings.scss";
import { getCurrentUserInfo } from "./GetCurrentUserInfo";
// import { axiosInstance } from "../../../../util/axiosConfig";

export const BasicInfoForm: React.FC<user> = (props: user) => {
  
  // let currentUser;

  // useEffect(() => {
  //   // You need to restrict it at some point
  //   // This is just dummy code and should be replaced by actual
  //   alert("does this worK?");
  //   currentUser = getCurrentUserInfo('5');
  // }, []);

  // getCurrentUserInfo('5').then((response) => {currentUser=response);
  // const text = JSON.stringify(currentUser);
  // console.log(currentUser);

  const updateBasicInfo = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usernameF = event.currentTarget["username"].value;
    const firstNameF = event.currentTarget["firstName"].value;
    const lastNameF = event.currentTarget["lastName"].value;

    // <Spinner color='success' />
    // document.getElementById("reimbTableBody").append(tr);
    const response = await axios.post(
      "http://localhost:8080/MochiCircle/api/users/updateBasic/",
      {
        userId: 5, // Get this from session or store or something
        username: usernameF,
        password: null,
        firstName: firstNameF,
        lastName: lastNameF,
        email: null,
        pic: null,
        status: null,
        bio: null,
        interests: null,
      }
    );

    const json = response.data;
    if(json.username===usernameF) {
      alert("Info successfully updated!");
    } else {
      alert("Sorry, but it seems like that username is already taken!");
    }
    
    // console.log(json);
    // console.log("test");
  };

  return (
    <div>
      <h3>Basic Info{/* <Spinner color='warning' /> */}</h3>
      <Form onSubmit={updateBasicInfo} className="settingsBox" method="POST">
        <div className="whiteText">Username</div>
        <Input
          type="text"
          name="username"
          required
          placeholder="current username"
        />
        <br />
        <div className="whiteText">First Name</div>
        <Input
          type="text"
          name="firstName"
          required
          placeholder={"current first name"}
        />
        <br />
        <div className="whiteText">Last Name</div>
        <Input
          type="text"
          name="lastName"
          required
          placeholder="current last name"
        />
        <br />
        <Input type="submit" value="Update info" className="btn btn-success" />
      </Form>
    </div>
  );
};
