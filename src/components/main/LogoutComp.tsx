import React from "react";
import { Form, Input } from "reactstrap";

interface IProps{

}

export const LogoutComp: React.FC<IProps> = (props:IProps) => 
{
    return (

        
    <span>
        <Form action="logout" method="post">
            <Input type="submit" value="logout" name="logout" />
        </Form>
    </span>
    )
}