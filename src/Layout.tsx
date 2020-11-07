import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// import { Container } from 'react-bootstrap'

const Layout = (props: { children: React.ReactNode; }) => {

  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default Layout;


// (props) => {
//   return (
//     <Container style={{marginTop: '5%'}}>
//         {props.children}
//     </Container>
//   )
// }