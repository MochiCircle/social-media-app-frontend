import React from "react";
import { Url } from "url";

export interface IProps {
  firstName: string;
  lastName: string;
  pic?: string;
  status?: string;
  bio?: string;
  interest?: string;
}

export const ProfileInfo: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      {props.pic && <img src={props.pic} alt="Profile Pic"></img>}
      <div>{props.firstName + " " + props.lastName}</div>
    </div>
  );
};
