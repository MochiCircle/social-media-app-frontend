import React from 'react';


//Need:

  // 
const HomePage = () => {


  import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Container>
      <Row>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col xs="3">.col-3</Col>
        <Col xs="auto">.col-auto - variable width content</Col>
        <Col xs="3">.col-3</Col>
      </Row>
      <Row>
        <Col xs="6">.col-6</Col>
        <Col xs="6">.col-6</Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col sm="4">.col-sm-4</Col>
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
    </Container>
  );
}
  // return (
   
  //   <div className="container text-center">    
  //     <div className="row">
  //       <div className="col-sm-3 well">
  //         <div className="well">
  //           <p><a href="#">My Profile</a></p>
  //           {/* <img src="bird.jpg" className="img-circle" height="65" width="65" alt="Avatar"/> */}
  //         </div>
  //         {/* <div className="well">
  //           <p><a href="#">Interests</a></p>
  //           <p>
  //             <span className="label label-default">News</span>
  //             <span className="label label-primary">W3Schools</span>
  //             <span className="label label-success">Labels</span>
  //             <span className="label label-info">Football</span>
  //             <span className="label label-warning">Gaming</span>
  //             <span className="label label-danger">Friends</span>
  //           </p>
  //         </div> */}
  //         <div className="alert alert-success fade in">
  //           <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
  //           <p><strong>Ey!</strong></p>
  //           People are looking at your profile. Find out who.
  //         </div>
  //         <p><a href="#">Link</a></p>
  //         <p><a href="#">Link</a></p>
  //         <p><a href="#">Link</a></p>
  //       </div>
  //       <div className="col-sm-7">
  //     </div>
  //   </div>
        
  //         <div className="row">
  //           <div className="col-sm-12">
  //             <div className="panel panel-default text-left">
  //               <div className="panel-body">
  //                 <p contentEditable="true">Status: Feeling Blue</p>
  //                 <button type="button" className="btn btn-default btn-sm">
  //                   <span className="glyphicon glyphicon-thumbs-up"></span> Like
  //                 </button>     
  //               </div>
  //             </div>
  //           </div>
  //         </div>
          
  //         <div className="row">
  //           <div className="col-sm-3">
  //             {/* <div className="well">
  //             <p>John</p>
  //             <img src="bird.jpg" className="img-circle" height="55" width="55" alt="Avatar">
  //             </div> */}
  //           </div>

  //           <div className="col-sm-9">
  //             <div className="well">
  //               <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="row">
  //           <div className="col-sm-3">
  //             {/* <div className="well">
  //             <p>Bo</p>
  //             <img src="bandmember.jpg" className="img-circle" height="55" width="55" alt="Avatar">
  //             </div> */}
  //           </div>
  //           <div className="col-sm-9">
  //             <div className="well">
  //               <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-sm-3">
  //             {/* <div className="well">
  //             <p>Jane</p>
  //             <img src="bandmember.jpg" className="img-circle" height="55" width="55" alt="Avatar">
  //             </div>
  //           </div> */}
  //           <div className="col-sm-9">
  //             <div className="well">
  //               <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-sm-3">
  //             {/* <div className="well">
  //             <p>Anja</p>
  //             <img src="bird.jpg" className="img-circle" height="55" width="55" alt="Avatar">
  //             </div> */}
  //           </div>
  //           <div className="col-sm-9">
  //             <div className="well">
  //               <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
  //             </div>
  //           </div>
  //         </div>     
  //       </div>
  //       {/* <div className="col-sm-2 well">
  //         <div className="thumbnail">
  //           <p>Upcoming Events:</p>
  //           <img src="paris.jpg" alt="Paris" width="400" height="300">
  //           <p><strong>Paris</strong></p>
  //           <p>Fri. 27 November 2015</p>
  //           <button className="btn btn-primary">Info</button>
  //         </div>       */}
  //         <div className="well">
  //           <p>ADS</p>
  //         </div>
  //         <div className="well">
  //           <p>ADS</p>
  //         </div>
  //       </div>
      

export default HomePage;



{/* //                 <h5>
//                   Just click to answer a few questions and stay fit!
//                 </h5>
//             </Col>

//             <Col lg={12} className='col-lg-12 button-col'>
//               <Button variant="main" href='/food_advisors/new'>
//                   Get Food Advice
//               </Button>
//             </Col>

//             <Col lg={12} className='col-lg-12 button-col' style={{paddingTop: '1rem'}}>
//               <Button variant="main" href='/activity_advisors/new'>
//                 Get Activity Advice
//               </Button>
//             </Col>
//           </TextStyles>
//         </ButtonStyles>
//       </ColumnStyles>
//     </MediaQueries>
//   )
// } */}

