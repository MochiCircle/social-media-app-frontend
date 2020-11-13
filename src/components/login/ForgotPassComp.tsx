import { faRemoveFormat } from "@fortawesome/free-solid-svg-icons";
import React, { SyntheticEvent, useState } from "react";
import { connect, useDispatch, useStore } from "react-redux";
import { Button, Form, Spinner } from "reactstrap";
import { setAlert } from "../../actions/AlertAction";
import { loadUser } from "../../reducers/LoginReducer";
import { axiosInstance } from "../../util/axiosConfig";
import "./loginStyling.scss";

interface IProps{
}

const ForgotPassComp: React.FC<IProps> = (props:IProps) => 
{
    const [showForgot, setForgot] = useState(true);
    const [showSpinner, setSpinner] = useState(false);
    
    //You need to use this right inside the 
    const dispatch = useDispatch();

    const toggleForgotPass = () => {
        
        if(showForgot == false){
            setForgot(true);
        }
        else{
            setForgot(false);
        }
    }

    const sendEmail = (ev:SyntheticEvent<HTMLFormElement>) => {

        ev.preventDefault();

        setSpinner(true);
        const email = ev.currentTarget["emailF"].value;
        console.log(email);
        axiosInstance.post("users/forgot/", {email:email})
        .then((resp) => {
            if (resp.data === "sent")
            {
                setSpinner(false);
                dispatch(setAlert(
                    "Sent a recovery email with new temporary password",
                    "success",20000));
            }
            else
            {
                setSpinner(false);
                dispatch(
                    setAlert(
                      "ERROR: Email failed to send",
                      "danger",
                      20000
                    ));
            }
        })
    }

    return (
    <span className="container">
        {showForgot ? 
        <>
            <h2>{showSpinner ? <Spinner color="primary" /> : <span />}</h2>
            <Button onClick={toggleForgotPass} id="fpass" className="btn">Forgot Password?</Button>
        </>

        : 
        <>
            <h2>{showSpinner ? <Spinner color="primary" /> : <span />}</h2>
            <Button onClick={toggleForgotPass} id="fpass" className="btn">Forgot Password?</Button>
            <Form onSubmit={sendEmail}>
                <input style={{margin:5}} type="email" className="entry" name="emailF" placeholder="email"/>
                <input style={{margin:5}} type="submit" className="btn" value="reset password" />
            </Form>
        </>
                }
    </span>
    )
}

export default ForgotPassComp;