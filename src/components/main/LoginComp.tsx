import React from "react";
import { Form, Input, NavItem } from "reactstrap";
import "../login/loginStyling.scss";

interface IProps{

}

export const LoginComp: React.FC<IProps> = (props:IProps) => 
{

    return (
        <div >
        <Form action="login" method="post" className="form-width">
            <Input className="entry" type="text" name="username" placeholder="Enter username"/>
            <Input className="entry" float="right" type="password" name="password" placeholder="Enter password"/>
            <Input type="submit" value="LOGIN" name="login" />
        </Form>
     </div>
    // </span>
    )
}