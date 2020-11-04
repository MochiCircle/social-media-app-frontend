import React from "react";
import { Form, Input } from "reactstrap";

interface IProps{

    loginHandler: (username: string, password:string) => 
}

export const LoginComp: React.FC<IProps> = (props:IProps) => 
{



    return (
    <span>
        <Form method="post">
            <Input type="text" name="username" />
            <Input type="password" name="password" />
            <Input type="submit" value="LOGIN" name="login" 
            onSubmit={loginHandler()}/>
        </Form>
    </span>
    )
}