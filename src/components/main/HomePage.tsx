import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainNavbar from './MainNavbar';

//Profile page will go where all the vanilla html stuff is now as the side bar for the current user

const HomePage = () => {
  return (
    <>
    <MainNavbar/>
      <Row>
        <Col md="4">
        <br></br>
        <br></br>
        This is where the page with user's profile and all posts will go
        <div className="well">
          <p><a href="#">My Profile</a></p>
            {/* <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar"> */}
        </div>
        <div className="well">
            <p><a href="#">Interests</a></p>
            <p>
              <span className="label label-default">News</span>
              <span className="label label-primary">W3Schools</span>
              <span className="label label-success">Labels</span>
              <span className="label label-info">Football</span>
              <span className="label label-warning">Gaming</span>
              <span className="label label-danger">Friends</span>
            </p>
          <div className="alert alert-success fade in">
            <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
            <p><strong>Ey!</strong></p>
            People are looking at your profile. Find out who.
          </div>
          <p><a href="#">Link</a></p>
          <p><a href="#">Link</a></p>
          <p><a href="#">Link</a></p>
        </div>

        </Col>
        <Col md="8">Posts Column</Col>
      </Row>      
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
      </>
  );
}  

export default HomePage;

