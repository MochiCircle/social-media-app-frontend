import React, { SyntheticEvent, useState } from "react";
import { Form, Input } from "reactstrap";
import axios from 'axios';
import '../settings.css';

export const BioForm: React.FC = () => {

  const [modal, setModal] = useState(false);

  const updateBio = async (event: SyntheticEvent<HTMLFormElement>) => {
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
      <h3>Bio</h3>
      <Form onSubmit={updateBio} className="settingsBox" method="POST">
        <div className="whiteText" >Interests</div>
        <Input type='text' name='userInterests' required placeholder='List some cool interests, comma separated' />
        <br/>
        <div className="whiteText" >Bio</div>
        <Input type='textarea' rows={4} name='userBio' required placeholder='Tell us about yourself!' />
        <br/>
        <Input type='submit' value='Update bio' className="btn btn-success" />
      </Form>
  </div>
  );
};
