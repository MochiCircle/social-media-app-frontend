import Axios from 'axios';
import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Label } from 'reactstrap';
import { setAlert } from '../../actions/AlertAction';
import { axiosInstance } from '../../util/axiosConfig';
import "./loginStyling.scss";
interface IProps {
  userId:number
}

const RegisterPage: React.FC<IProps> = (props:IProps) => {

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
          alert("Uh oh. Those passwords don't match my guy. Try again.")
        }
        else
        {
            axiosInstance.post("users/create/",
            {
              username: username,
              password: password,
              firstname: firstname,
              lastname: lastname,
              email: email,
            })
            .then(()=>{
              setAlert(
                "**SUCCESSFUL REGISTERY** as: " +
                  firstname +
                  lastname + "! Please verify your email.",
                "success",
                20000
              )
               window.location.href = "/";
            })
            .catch((error) => {
             console.log(error);
             setAlert(
              "ERROR: Unable to register your account at the moment.",
              "danger",
              20000
            )
              alert("Register Error: Unable to register this user.");
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
                <Input type='submit' value='Register' className="log-btn" 
                style={{padding:10,fontSize:20,fontWeight:"bolder"}}/>
            </div>
            
          </Form>
        </>
    
      )
}

//recieves these values from the app's store
const mapStateToProps = (appState:any) => {
  return {
      userId: appState.loginState.id
  }
}

//HOC export right here babyyy
export default connect<IProps>(mapStateToProps)(RegisterPage);