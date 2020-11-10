import React from "react";
import { Row, Col, Form, Input, Label } from "reactstrap";
import MainNavbar from "./MainNavbar";
import { Profile } from "../profile/Profile";
import { connect } from "react-redux";
import { verify } from "crypto";
import { SyntheticEvent } from "react";
import Axios from "axios";

//Profile page will go where all the vanilla html stuff is now as the side bar for the current user

interface IProps{
  userId: number,
  firstname: string,
  lastname: string,
  picUrl: string,
  verified: boolean,
}

const HomePage: React.FC<IProps> = (props:IProps) => {

  /*
  const submitVerify = (event:SyntheticEvent<HTMLFormElement>) =>
  {
    event.preventDefault();

    const code = event.currentTarget["code"].value;

    Axios.post("http://localhost:8080/api/verify/"+
           props.userId + "+" + code).then(()=>{
              //window.location.href = "/";
           }
            
           ).catch((error) => {
             console.log(error);
              alert("Register Error: Unable to register this user.")
           })
  }
  */

  if(props.userId == 0)
  {
    window.location.href = "/spin";
  }

    return(
      <div className="mochi-guy">
        <div className="row justify-content-center">
          <h1 style={{textAlign: "center"}}> You're home {props.firstname}! Now what?</h1>
        </div>
      </div>
    )
  
};

//recieves these values from the app's store
const mapStateToProps = (appState:any) => {
  return {
      userId: appState.loginState.id,
      firstname: appState.loginState.firstname,
      lastname: appState.loginState.lastname,
      picUrl: appState.loginState.picUrl,
      verified: appState.loginState.verified
  }
}

//HOC export right here babyyy
export default connect<IProps>(mapStateToProps)(HomePage);
