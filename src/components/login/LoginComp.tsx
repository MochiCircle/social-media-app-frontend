import React, { SyntheticEvent, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { Form, Spinner } from "reactstrap";
import { loadUser } from "../../reducers/LoginReducer";
import "./loginStyling.scss";

interface IProps{
    
}

const LoginComp: React.FC<IProps> = (props:IProps) => 
{

    const [showSpinner, setSpinner] = useState(false);
    
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
        setSpinner(true);
        onLoadUser(username,password);
        setSpinner(false);
    }

    return (
    <span className="container">
        <Form onSubmit={handleSubmit} className="row">
            {/* Shows the spinner */}
            <h2>{showSpinner ? <Spinner color="primary" /> : <span />}</h2>
            <input type="text" className="col-4" placeholder="username" name="username" style={{ margin: 5 }} maxLength={20}/>
            <input type="password" className="col-4" placeholder="**********" name="password" style={{ margin: 5 }} maxLength={20} />
            <input type="submit" name="log-btn" value="LOGIN" className="col-2 log-btn" style={{ margin: 5 }} />
        </Form>
    </span>
    )
}

export default LoginComp;