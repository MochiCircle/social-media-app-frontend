import axios from 'axios';
import React, { SyntheticEvent } from "react";
import { Form, Input } from "reactstrap";
import '../settings.scss';

export const EmailForm: React.FC = () => {

  const updateEmail = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailF = event.currentTarget["email"].value;

    const response = await axios.post(
      "http://localhost:8080/MochiCircle/api/users/updateEmail/",
      {
        userId: 5, // Get this from session or store or something
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

    const json = response.data;
    if(json.email===emailF) {
      alert("Email successfully changed!");
    } else {
      alert("Something has gone awry.");
    }
  };

  return (
    <div>
      <h3>Email</h3>
      <Form onSubmit={updateEmail} className="settingsBox" method="POST">
        <div className="whiteText" >Email</div>
        <Input type='email' name='email' required placeholder='Email address' />
        <br/>
        <Input type='submit' value='Send email' className="btn btn-primary col-6" />
      </Form>
  </div>
  );
};
