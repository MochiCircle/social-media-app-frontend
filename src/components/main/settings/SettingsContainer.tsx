import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainNavbar from "../MainNavbar";
import { BasicInfoForm } from "./forms/BasicInfoForm";
import { BioForm } from "./forms/BioForm";
import { EmailForm } from "./forms/EmailForm";
import { PasswordForm } from "./forms/PasswordForm";
import { PictureForm } from "./forms/PictureForm";
import './settings.css';

interface IProps {
  id: number;
  email: string;
  username: string;
  password: string;
  firstnate: string;
  lastname: string;
  profile_pic: string;
  status: string;
  interests: string;
  bio: string;
}

export const SettingsContainer: React.FC<any> = (props: any) => {
  return (
    <div>
      <MainNavbar />
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
