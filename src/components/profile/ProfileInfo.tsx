import React, { useState } from "react";
import { Profile } from "../../util/Models";
import "./Profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser as user,
  faEdit as edit,
  faSave as save,
} from "@fortawesome/free-regular-svg-icons";
import { Button, Form, Input } from "reactstrap";

export const ProfileInfo: React.FC<Profile> = (props: Profile) => {
  const [statusEditor, setStatusEditor] = useState(false);
  const currentStatus = props.status;
  const [status, setStatus] = useState(currentStatus);

  const openStatusEditor = (event: React.SyntheticEvent<SVGSVGElement>) => {
    setStatusEditor(!statusEditor);
  };

  const saveStatus = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newStatus = event.currentTarget["status"].value;
    console.log(newStatus);
    props.status = newStatus;
    //implement axios

    setStatus(newStatus);
    setStatusEditor(false);
  };

  if (!props) return <p>No User Found</p>;
  return (
    <div className="profile">
      {props.pic && (
        <img className="pic" src={props.pic} alt="Profile Pic"></img>
      )}
      <div className="name">
        {" "}
        <FontAwesomeIcon icon={user} pull="left" />{" "}
        {props.firstName + " " + props.lastName}
      </div>
      <div className="status">
        {!statusEditor ? (
          props.status
        ) : (
          <Form onSubmit={saveStatus}>
            <Input name="status" placeholder={status}></Input>
            <Button type="submit">
              <FontAwesomeIcon icon={save} />
            </Button>
          </Form>
        )}
        <FontAwesomeIcon
          icon={edit}
          style={{ display: "inline", marginLeft: "5px", cursor: "pointer" }}
          onClick={openStatusEditor}
        />
      </div>

      <div className="category">Bio</div>
      <div className="bio">{props.bio}</div>
      <div className="category">Interests</div>
      <div className="interest">{props.interests}</div>
    </div>
  );
};
