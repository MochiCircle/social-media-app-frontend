import React, { useState } from "react";
import { axiosInstance } from "../../util/axiosConfig";
import ProfileInfo from "./ProfileInfo";
import { ProfileInfoOther } from "./ProfileInfoOther";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface IProp {
  userId: number;
  ownProfile: boolean;
}

export const Profile: React.FC<IProp> = (prop: IProp) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    id: 0,
    username: "",
    password: "",
    picUrl: "",
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
        <FontAwesomeIcon icon={faSpinner} spin />
      )}
    </>
  );
};
