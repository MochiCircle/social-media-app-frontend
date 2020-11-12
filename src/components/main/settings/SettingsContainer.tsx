import React, { useState } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import MainNavbar from "../MainNavbar";
import BasicInfoForm from "./forms/BasicInfoForm";
import EmailForm from "./forms/EmailForm";
import PasswordForm from "./forms/PasswordForm";
import "./settings.scss";

interface IProps {
  id: number;
}

// Will either update the state, or just let users know their changes will be visible next time they log in

const SettingsContainer: React.FC<IProps> = (props: IProps) => {
  if (props.id > 0) {
    return (
      <div className="container-fluid">
        <BasicInfoForm />
        <br />
        <PasswordForm />
        <br />
        <EmailForm />
      </div>
    );
  } else {
    return (
    <div>
      <br />
      <br />
      <h1 className="redText">Stop snooping around and log in already!</h1>
    </div>
    );
  }
};

//recieves these values from the app's store
const mapStateToProps = (appState: any) => {
  return {
    id: appState.loginState.id,
  };
};

//HRO export right here
export default connect(mapStateToProps)(SettingsContainer);
