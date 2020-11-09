import React, { SyntheticEvent, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { Button, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { ILoginState } from "../../reducers";
import { loadUser } from "../../reducers/LoginReducer";
import { LoginTypes } from "./LoginActionTypes";

interface IProps{
    userId:number,
    firstname:string,
    lastname:string
}

const LoginComp: React.FC<IProps> = (props:IProps) => 
{
    
    console.log("user data as props: " + props.userId + " " + props.firstname );

    //You need to use this right inside the 
    const dispatch = useDispatch();

    const onLoadUser = (username:string, pass:string) => {
        dispatch(loadUser(username, pass));
    }

    //assign the username and password initial values
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) =>{

        event.preventDefault();
        
        const username = event.currentTarget["username"].value;
        const password = event.currentTarget["password"].value;

        onLoadUser(username,password);
    }

    return (
    <span>
        <Form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter username" name="username" style={{ margin: 5 }} maxLength={20}/>
            <input type="password" placeholder="**********" name="password" style={{ margin: 5 }} maxLength={20} />
            <input type="submit" name="login-btn" value="LOGIN" style={{ margin: 5 }} />
        </Form>
    </span>
    )
}

//move this to the main navbar component tomorrow and work with conditional rendering
// (if the userId = 0 then render the LoginComp and register button, otherwise load
// the LogoutComp with the home and my profile button)

//recieves these values from the app's store
const mapStateToProps = (appState:any) => {
    return {
        userId: appState.loginState.id,
        firstname: appState.loginState.firstname,
        lastname: appState.loginState.lastname,
    }
}

//HRO export right here
export default connect<IProps>(mapStateToProps)(LoginComp);