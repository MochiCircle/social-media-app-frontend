import React from "react";
import { Form, Input } from "reactstrap";

interface IProps{

}

export const LoginComp: React.FC<IProps> = (props:IProps) => 
{



    return (
    <span>
        <Form action="login" method="post">
            <Input type="text" name="username" />
            <Input type="password" name="password" />
            <Input type="submit" value="LOGIN" name="login" />
        </Form>
    </span>
    )
}