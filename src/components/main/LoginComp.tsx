import React from "react";
import { Form, Input, NavItem } from "reactstrap";

interface IProps{

}

export const LoginComp: React.FC<IProps> = (props:IProps) => 
{



    return (
        <div >
        <Form action="login" method="post" className="form-width">
            
            <Input type="text" name="username" placeholder="Enter username"/>
            <Input float="right" type="password" name="password" placeholder="Enter password"/>
            <Input type="submit" value="LOGIN" name="login" />
        </Form>
     </div>
    // </span>
    )
}