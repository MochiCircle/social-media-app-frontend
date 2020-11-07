import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { Form, Input } from "reactstrap";
import axios from 'axios';
import '../settings.css';
import Axios from "axios";
import { axiosInstance } from "../../../../util/axiosConfig";

export const BasicInfoForm: React.FC = () => {

  const [modal, setModal] = useState(false);

  const getCurrentUserInfo = async (input:string) => {
    const pid = "http://localhost:8000/users/" + input;
    console.log(pid);
    const response = await axiosInstance.get("" + pid);
    // document.getElementById('asd').value="asd";
    alert(response.data.username);
    const text = JSON.stringify(response);
  }
  getCurrentUserInfo('8');

  const updateBasicInfo = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fScore = event.currentTarget["scoreSelector"].value;
    const fComment = event.currentTarget["judgeComment"].value;
    const fEmail = event.currentTarget["emailForm"].value;

    console.log("you should see dis bruh");

    axios.put("http://localhost:3004/users", {
      id: null,
      likes: 0,
      comment: fComment,
      week: fScore,
      userEmail: fEmail,
    });
  };

  return (
    <div>
      <h3>Basic Info</h3>
      <Form onSubmit={updateBasicInfo} className="settingsBox" method="POST">
        <div className="whiteText" >Username</div>
        <Input type='text' name='username' id='asd' required placeholder='current username' />
        <br/>
        <div className="whiteText" >First Name</div>
        <Input type='text' name='firstName' required placeholder='current first name' />
        <br/>
        <div className="whiteText" >Last Name</div>
        <Input type='text' name='lastName' required placeholder='current last name' />
        <br/>
        <Input type='submit' value='Update info' className="btn btn-success" />
      </Form>
  </div>
  );
};
