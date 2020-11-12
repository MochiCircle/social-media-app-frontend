import React from "react";
import { userCorrected } from "../../util/Models";
import "./Profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as users } from "@fortawesome/free-regular-svg-icons";

export const ProfileInfoOther: React.FC<userCorrected> = (
  props: userCorrected
) => {
  if (!props.firstname) return <p>No User Found</p>;
  return (
    <div className="profile">
      {props.picUrl && (
        <img className="profile-pic" src={props.picUrl} alt="Profile Pic"></img>
      )}
      <div className="name">{props.firstname + " " + props.lastname}</div>
      <span className="profile-username">@{props.username}</span>
      <div className="status">{props.status}</div>

      <div className="category">Bio</div>
      <div className="bio">{props.bio}</div>
      <div className="category">Interests</div>
      <div className="interest">{props.interests}</div>
    </div>
  );
};
