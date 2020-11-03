import React from "react";
import "./Profile.css";
import { ProfileInfo } from "./ProfileInfo";
interface IProps {}

export const Profile: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      Profile Page
      <ProfileInfo firstName="hello" lastName="world" />
    </div>
  );
};
