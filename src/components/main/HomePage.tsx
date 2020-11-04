import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const HomePage = () => {
  return (
    <>
      <Row>
        <Col md="4">

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


{
  
  /* <div class="col-sm-3 well">
<div class="well">
  <p><a href="#">My Profile</a></p>
  <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
</div>
<div class="well">
  <p><a href="#">Interests</a></p>
  <p>
    <span class="label label-default">News</span>
    <span class="label label-primary">W3Schools</span>
    <span class="label label-success">Labels</span>
    <span class="label label-info">Football</span>
    <span class="label label-warning">Gaming</span>
    <span class="label label-danger">Friends</span>
  </p>
</div>
<div class="alert alert-success fade in">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
  <p><strong>Ey!</strong></p>
  People are looking at your profile. Find out who.
</div>
<p><a href="#">Link</a></p>
<p><a href="#">Link</a></p>
<p><a href="#">Link</a></p>
</div> */}