import React from "react";
import { Form, Input } from "reactstrap";

interface IProps{

}

export const LogoutComp: React.FC<IProps> = (props:IProps) => 
{


    
    return (
    <span>
        <Form action="logout" method="post">
            <p className="">Welcome back</p>
            <Input type="submit" value="LOGOUT" name="login" />
        </Form>
    </span>
    )
}