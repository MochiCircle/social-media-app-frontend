import React, { useState } from "react";
import { Profile, user } from "../../util/Models";
import "./Profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser as users,
  faEdit as edit,
  faSave as save,
} from "@fortawesome/free-regular-svg-icons";

export const ProfileInfoOther: React.FC<user> = (props: user) => {
  if (!props.firstName) return <p>No User Found</p>;
  return (
    <div className="profile">
      {props.pic && (
        <img className="pic" src={props.pic} alt="Profile Pic"></img>
      )}
      <div className="name">
        {" "}
        <FontAwesomeIcon icon={users} pull="left" />{" "}
        {props.firstName + " " + props.lastName}
      </div>
      <div className="status">{props.status}</div>

      <div className="category">Bio</div>
      <div className="bio">{props.bio}</div>
      <div className="category">Interests</div>
      <div className="interest">{props.interests}</div>
    </div>
  );
};
