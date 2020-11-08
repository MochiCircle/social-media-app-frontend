import React from "react";
import { Profile } from "../../util/Models";
import "./Profile.scss";

export const ProfileInfo: React.FC<Profile> = (props: Profile) => {
  if (!props) return <p>No User Found</p>;
  return (
    <div className="profile">
      {props.pic && (
        <img className="pic" src={props.pic} alt="Profile Pic"></img>
      )}
      <div className="name">{props.firstName + " " + props.lastName}</div>
      {props.status && <div className="status">{props.status}</div>}
      <div className="category">Bio</div>
      <div className="bio">{props.bio}</div>
      <div className="category">Interests</div>
      <div className="interest">{props.interests}</div>
    </div>
  );
};
