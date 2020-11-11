import React, { useState } from "react";
import { axiosInstance } from "../../util/axiosConfig";
import ProfileInfo from "./ProfileInfo";
import { ProfileInfoOther } from "./ProfileInfoOther";

interface IProp {
  userId: number;
  ownProfile: boolean;
}

export const Profile: React.FC<IProp> = (prop: IProp) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userId: 0,
    username: "",
    password: "",
    pic: "",
    status: "",
    bio: "",
    interests: "",
    verified: false,
  });
  const ownProfile = prop.ownProfile;

  if (!ownProfile) {
    axiosInstance.get("/users/find/" + prop.userId).then((response) => {
      setIsLoaded(true);
      setProfile(response.data[0]);
    });
  }

  return (
    <>
      {ownProfile ? (
        <ProfileInfo />
      ) : isLoaded ? (
        <ProfileInfoOther {...profile} />
      ) : (
        "Loading Profile"
      )}
    </>
  );
};
