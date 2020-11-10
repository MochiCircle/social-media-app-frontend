import axios from 'axios';
import React, { SyntheticEvent } from "react";
import { Form, Input } from "reactstrap";
import '../settings.scss';

export const BioForm: React.FC<any> = () => {

  const updateBio = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const interestsF = event.currentTarget["userInterests"].value;
    const bioF = event.currentTarget["userBio"].value;

    const response = await axios.post(
      "http://localhost:8080/MochiCircle/api/users/updateBio/",
      {
        userId: 5, // Get this from session or store or something
        username: null,
        password: null,
        firstName: null,
        lastName: null,
        email: null,
        pic: null,
        status: null,
        bio: bioF,
        interests: interestsF,
      }
    );

    const json = response.data;
    if(json.bio===bioF) {
      alert("Bio successfully changed!");
    } else {
      alert("Something has gone awry.");
    }
  };

  return (
    <div>
      <h3>Bio</h3>
      <Form onSubmit={updateBio} className="settingsBox" method="POST">
        <div className="whiteText" >Interests</div>
        <Input type='text' name='userInterests' placeholder='List some cool interests, comma separated' />
        <br/>
        <div className="whiteText" >Bio</div>
        <Input type='textarea' rows={4} name='userBio' placeholder='Tell us about yourself!' />
        <br/>
        <Input type='submit' value='Update bio' className="btn btn-success" />
      </Form>
  </div>
  );
};
