import React, { useEffect, useState } from "react";
import { ProfileInfo } from "./ProfileInfo";
import { axiosInstance } from "../../util/axiosConfig";
import { Col, Row } from "reactstrap";

interface IProp {
  userId: number;
}

export const Profile: React.FC<IProp> = (prop: IProp) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
  });

  let userId = prop.userId;
  if (prop.userId === 0) {
    //get loginstate's id
  }

  useEffect(() => {
    axiosInstance.get("/users/" + userId).then((response) => {
      setIsLoaded(true);
      setProfile(response.data[0]);
    });
  }, [userId]);

  return <>{isLoaded ? <ProfileInfo {...profile} /> : "loading..."}</>;
};
