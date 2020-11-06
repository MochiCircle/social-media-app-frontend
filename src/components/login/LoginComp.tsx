import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "reactstrap";
import { login } from "../../actions/LoginAction";

interface IProps{
    
}

export const LoginComp: React.FC<IProps> = (props:IProps) => 
{

    //assign the username and password initial values
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) =>{

        const username = event.currentTarget["username"].value;
        const password = event.currentTarget["password"].value;

        //const logDispatch = useDispatch();
        //logDispatch(login({"username": username, "password": password}));

        alert("given username: " + username + " password: " + password);
        event.preventDefault();
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