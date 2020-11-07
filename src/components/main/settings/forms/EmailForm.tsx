import React, { SyntheticEvent, useState } from "react";
import { Form, Input } from "reactstrap";
import axios from 'axios';
import '../settings.css';

export const EmailForm: React.FC = () => {

  const [modal, setModal] = useState(false);

  const updateEmail = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fScore = event.currentTarget["scoreSelector"].value;
    const fComment = event.currentTarget["judgeComment"].value;
    const fEmail = event.currentTarget["emailForm"].value;

    console.log("you should see dis bruh");

    axios.post("http://localhost:3004/post", {
      id: null,
      likes: 0,
      comment: fComment,
      week: fScore,
      userEmail: fEmail,
    });
  };

  return (
    <div>
      <h3>Email</h3>
      <Form onSubmit={updateEmail} className="settingsBox" method="POST">
        <div className="whiteText" >Email</div>
        <Input type='email' name='email' required placeholder='Email address' />
        <br/>
        <Input type='submit' value='Send email' className="btn btn-primary" />
      </Form>
  </div>
  );
};
