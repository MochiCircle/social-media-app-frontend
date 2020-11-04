import React, { useEffect, useState } from "react";
import { ProfileInfo } from "./ProfileInfo";
import { axiosInstance } from "../../util/axiosConfig";
interface IProps {
  userId: number;
}

export const Profile: React.FC<IProps> = (props: IProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    axiosInstance.get("/users/" + props.userId).then((response) => {
      setIsLoaded(true);
      setProfile(response.data);
    });
  }, [props.userId]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <ProfileInfo {...profile} />;
  }
};
