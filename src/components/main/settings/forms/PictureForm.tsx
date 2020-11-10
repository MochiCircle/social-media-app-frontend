import React, { SyntheticEvent, useState } from "react";
import { Form, Input, Label } from "reactstrap";
import axios from 'axios';
import '../settings.scss';

export const PictureForm: React.FC = () => {

  const [modal, setModal] = useState(false);

  const updateProfilePic = async (event: SyntheticEvent<HTMLFormElement>) => {
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
      <h3>Profile Picture</h3>
      <Form onSubmit={updateProfilePic} className="settingsBox" method="POST">
      <Label className="whiteText">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <br/>
        <Input type='submit' value='Update photo' className="btn btn-success" />
      </Form>
  </div>
  );
};
