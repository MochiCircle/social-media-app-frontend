import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import MainNavbar from "../MainNavbar";
import BasicInfoForm from "./forms/BasicInfoForm";
import { BioForm } from "./forms/BioForm";
import { EmailForm } from "./forms/EmailForm";
import { PasswordForm } from "./forms/PasswordForm";
import PictureForm from "./forms/PictureForm";
import './settings.scss';

interface IProps {
  userId: number,
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string,
  pic: string,
  status: string,
  bio: string,
  interests: string
}

// Will either update the state, or just let users know their changes will be visible next time they log in

export const SettingsContainer: React.FC<IProps> = (props: IProps) => {

  const [user, setUser] = useState({
    userId: 0,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    pic: "",
    status: "",
    bio: "",
    interests: ""
  });

  return (
    <div>
      <h1 className="font-weight-bold">Settings</h1>
      <br/>
      <Container>
        <Row>
          <Col>
            <PictureForm />
          </Col>
          <Col>
            <BasicInfoForm />
          </Col>
          <Col>
            <EmailForm />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <PasswordForm />
          </Col>
          <Col>
            <BioForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
