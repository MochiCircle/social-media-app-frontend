import Axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Label, Spinner } from 'reactstrap';
import { ISetAlert, setAlert } from '../../actions/AlertAction';
import { axiosInstance } from '../../util/axiosConfig';
import "./loginStyling.scss";
interface IProps {
  userId:number
}

const RegisterPage: React.FC<IProps & ISetAlert> = (props:IProps & ISetAlert) => {

  const [showSpinner, setSpinner] = useState(false);
  
    const handleSubmit = async (event:SyntheticEvent<HTMLFormElement>) => {
  
        event.preventDefault();
        const username = event.currentTarget["username"].value;
        const firstname = event.currentTarget["firstName"].value;
        const lastname = event.currentTarget["lastName"].value;
        const email = event.currentTarget["email"].value;
        const password = event.currentTarget["password"].value;
        const current = event.currentTarget["confirm"].value;
    
        if (password != current)
        {
          props.setAlert(
            "ERROR: Passwords do not match",
            "danger",
            20000
          );
        }
        else
        {
          setSpinner(true);
            axiosInstance.post("users/create/",
            {
              username: username,
              password: password,
              firstname: firstname,
              lastname: lastname,
              email: email,
            })
            .then(()=>{
              setSpinner(false);
              props.setAlert(
                "**SUCCESSFUL REGISTERY** as: " +
                  firstname +
                  lastname + "! Please verify your email.",
                "success",
                20000
              )
               window.location.href = "/";
            })
            .catch((error) => {
              setSpinner(false);
             console.log(error);
             props.setAlert(
              "ERROR: Unable to register your account at the moment.",
              "danger",
              20000
            )
              //alert("Register Error: Unable to register this user.");
           })  
        }
      }

      if(props.userId > 0)
      {
        window.location.href = "/profile";
      }

    return (
        <>
          <Form onSubmit={handleSubmit} method="POST" className="container reg-box" >

            <div className="row justify-content-center" style={{margin:10}}>
                <Input type='reset' value='Reset Fields' className="btn reset-btn" 
                style={{padding:7,fontSize:15,fontWeight:"bold"}}/>
            </div>

            <div className="row justify-content-center entry-row" style={{margin:10}}>
                <Label for="email" className="col-4 entry-row" style={{textAlign: "right"}}>Enter your email:</Label>
                <Input type='email' name='email' required placeholder='mochi@circle.com'
                className="col-4 entry" />
            </div>
            
            <div className="row justify-content-center entry-row" style={{margin:10}}>
                <Label for="username" className="col-4 entry-row" style={{textAlign: "right"}}>Enter a username:</Label>
                <Input type='text' name='username' required placeholder='Username' 
                className="col-4 entry"/>
            </div>

            <div className="row justify-content-center entry-row" style={{margin:10}}>
                <Label for="password" className="col-4 entry-row" style={{textAlign: "right" }}>Enter a password:</Label>
                <Input type='password' name='password' placeholder='New password'
                className="col-4 entry" />
            </div>

            <div className="row justify-content-center entry-row" style={{margin:10}}>
                <Label for="confirm" className="col-4 entry-row" style={{textAlign: "right"}}>Re-enter password:</Label>
                <Input type='password' name='confirm' placeholder='Re-type password'
                className="col-4 entry" />
            </div>

            <div className="row justify-content-center entry-row" style={{margin:10}}>
                <Label for="firstName" className="col-4 entry-row" style={{textAlign: "right"}}>Enter your first name:</Label>
                <Input type='text' name='firstName' required placeholder='First name'
                className="col-4 entry" />
            </div>
            
            <div className="row justify-content-center entry-row" style={{margin:10}}>
                <Label for="lastName" className="col-4 entry-row" style={{textAlign: "right"}}>Enter your last name:</Label>
                <Input type='text' name='lastName' placeholder='Last name' 
                className="col-4 entry" />
            </div>
            
            <div className="row justify-content-center" style={{margin:10}}>
                <Input type='submit' value='REGISTER' className="log-btn" 
                style={{padding:10,fontSize:20,fontWeight:"bolder"}}/>
            </div>
            
          </Form>
          <div className="container">
            <div className="row justify-content-center">
              <h2>{showSpinner ? <Spinner color="primary" /> : <span />}</h2>
            </div>
          </div>
          
        </>
    
      )
}

//recieves these values from the app's store
const mapStateToProps = (appState:any) => {
  return {
      userId: appState.loginState.id
  }
}

const mapDispatchToProps = {
  setAlert: setAlert,
};

//HOC export right here babyyy
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);