import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Form, Input } from "reactstrap";
import axios from "axios";
import "../settings.css";
import Axios from "axios";
import { axiosInstance } from "../../../../util/axiosConfig";

export const BasicInfoForm: React.FC<any> = () => {

  const getCurrentUserInfo = async (input: string) => {
    const pid = "http://localhost:8080/MochiCircle/api/users/find/" + input;
    console.log(pid);
    const response = await axiosInstance.get("" + pid);
    // document.getElementById('asd').value="asd";
    const text = JSON.stringify(response);
    alert(text);
  };
  getCurrentUserInfo('5');

  const updateBasicInfo = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usernameF = event.currentTarget["username"].value;
    const firstNameF = event.currentTarget["firstName"].value;
    const lastNameF = event.currentTarget["lastName"].value;

    console.log("inside updating info area");

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
    console.log(json);
    console.log("test");
  };

  return (
    <div>
      <h3>Basic Info</h3>
      <Form onSubmit={updateBasicInfo} className="settingsBox" method="POST">
        <div className="whiteText">Username</div>
        <Input
          type="text"
          name="username"
          id="asd"
          required
          placeholder="current username"
        />
        <br />
        <div className="whiteText">First Name</div>
        <Input
          type="text"
          name="firstName"
          required
          placeholder="current first name"
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
