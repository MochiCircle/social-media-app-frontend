import React, { useState } from "react";
import { connect } from "react-redux";
import { userCorrected } from "../../util/Models";

const SpinPage: React.FC<userCorrected> = (props: userCorrected) => {
  if (props.username) {
    window.location.href = "/";
  }

  return (
    <div className="mochi-guy">
      <h3>Look at him go!</h3>
    </div>
  );
};

const mapStateToProps = (appState: any) => {
  return {
    id: appState.loginState.id,
    username: appState.loginState.username,
    password: appState.loginState.password,
    firstname: appState.loginState.firstname,
    lastname: appState.loginState.lastname,
    email: appState.loginState.email,
    picUrl: appState.loginState.picUrl,
    status: appState.loginState.status,
    bio: appState.loginState.bio,
    interests: appState.loginState.interests,
    verified: appState.loginState.verified,
  };
};

export default connect<userCorrected>(mapStateToProps)(SpinPage);
