import Axios from 'axios';
import React, { SyntheticEvent } from 'react';
import { Form, Input, Label } from 'reactstrap';
import "./loginStyling.scss";
interface IProps {
  text: string;
}

const RegisterPage: React.FC = () => {

    const handleSubmit = async (event:SyntheticEvent<HTMLFormElement>) => {
  
        event.preventDefault();
        const username = event.currentTarget["username"].value;
        const fName = event.currentTarget["firstName"].value;
        const lName = event.currentTarget["lastName"].value;
        const eMail = event.currentTarget["email"].value;
        const password = event.currentTarget["password"].value;
        const current = event.currentTarget["confirm"].value;
    
        if (password != current)
        {
          alert("Uh oh. Those passwords don't match my guy. Try again.")
        }
        else
        {
    
          Axios.post("http://localhost:8000/users", {
              userId: null,
              username: username,
              password: password,
              firstName: fName,
              lastName: lName,
              email: eMail,
              pic: "http://https://images-na.ssl-images-amazon.com/images/I/51lK5b92Q1L._AC_.jpg",
              status: "<Please enter a status>",
              bio: "<Please enter a Bio>",
              interests: "<Please enter some interests"
              
          })
        }
      }

    return (
        <>
          <Form onSubmit={handleSubmit} method="POST" className="container"
          style={{marginTop:150}}>

            <div className="row justify-content-center" style={{margin:10}}>
                <Input type='reset' value='Reset Fields' className="reset-btn" 
                style={{padding:7,fontSize:15,fontWeight:"bold"}}/>
            </div>

            <div className="row justify-content-center" style={{margin:10}}>
                <Label for="email" className="col-4">Enter your email:</Label>
                <Input type='email' name='email' required placeholder='mochi@circle.com'
                className="col-4 entry" />
            </div>
            
            <div className="row justify-content-center" style={{margin:10}}>
                <Label for="username" className="col-4">Enter a username:</Label>
                <Input type='text' name='username' required placeholder='Username' 
                className="col-4 entry"/>
            </div>

            <div className="row justify-content-center" style={{margin:10}}>
                <Label for="password" className="col-4">Enter a password:</Label>
                <Input type='password' name='password' placeholder='New password'
                className="col-4 entry" />
            </div>

            <div className="row justify-content-center" style={{margin:10}}>
                <Label for="confirm" className="col-4">Re-enter password:</Label>
                <Input type='password' name='confirm' placeholder='Re-type password'
                className="col-4 entry" />
            </div>

            <div className="row justify-content-center" style={{margin:10}}>
                <Label for="firstName" className="col-4">Enter your first name:</Label>
                <Input type='text' name='firstName' required placeholder='First name'
                className="col-4 entry" />
            </div>
            
            <div className="row justify-content-center" style={{margin:10}}>
                <Label for="lastName" className="col-4">Enter your last name:</Label>
                <Input type='text' name='lastName' placeholder='Last name' 
                className="col-4 entry" />
            </div>
            
            <div className="row justify-content-center" style={{margin:10}}>
                <Input type='submit' value='Register' className="submit-btn" 
                style={{padding:10,fontSize:20,fontWeight:"bolder"}}/>
            </div>
            
            
            
          </Form>
        </>
    
      )
}

export default RegisterPage;