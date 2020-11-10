import React, { SyntheticEvent } from "react";
import { useDispatch, useStore } from "react-redux";
import { Form } from "reactstrap";
import { loadUser } from "../../reducers/LoginReducer";
import "./loginStyling.scss";

interface IProps{
    
}

const LoginComp: React.FC<IProps> = (props:IProps) => 
{

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
    <span className="container">
        <Form onSubmit={handleSubmit} className="row">
            <input type="text" className="col-4" placeholder="username" name="username" style={{ margin: 5 }} maxLength={20}/>
            <input type="password" className="col-4" placeholder="**********" name="password" style={{ margin: 5 }} maxLength={20} />
            <input type="submit" name="log-btn" value="LOGIN" className="col-2 log-btn" style={{ margin: 5 }} />
        </Form>
    </span>
    )
}

export default LoginComp;