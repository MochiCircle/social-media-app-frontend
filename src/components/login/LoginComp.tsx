import { faRemoveFormat } from "@fortawesome/free-solid-svg-icons";
import React, { SyntheticEvent, useState } from "react";
import { connect, useDispatch, useStore } from "react-redux";
import { Button, Form, Spinner } from "reactstrap";
import { setAlert } from "../../actions/AlertAction";
import { loadUser } from "../../reducers/LoginReducer";
import { axiosInstance } from "../../util/axiosConfig";
import "./loginStyling.scss";

interface IProps{
    userId:number
}

const LoginComp: React.FC<IProps> = (props:IProps) => 
{
    const [showForgot, setForgot] = useState(false);
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

    const toggleForgotPass = () => {
        
        if(showForgot == false){
            setForgot(true);
        }
        else{
            setForgot(false);
        }
    }

    const sendEmail = (ev:any) => {
        const email = ev.currentTarget["emailF"].value;

        axiosInstance.post("users/forgot/", {email:email})
        .then((resp) => {
            if (resp.data == "sent")
            {
                dispatch(setAlert(
                    "Sent recovery email with new password",
                    "success",20000));
            }
            else
            {
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
            <Form onSubmit={handleSubmit} className="row">
                {/* Shows the spinner */}
                <h2>{showSpinner ? <Spinner color="primary" /> : <span />}</h2>
                <input type="text" className="col-4" placeholder="username" name="username" style={{ margin: 5 }} maxLength={20}/>
                <input type="password" className="col-4" placeholder="**********" name="password" style={{ margin: 5 }} maxLength={20} />
                <input type="submit" name="log-btn" value="LOGIN" className="col-2 log-btn" style={{ margin: 5 }} />
                <Button onClick={toggleForgotPass} id="fpass" className="col-2">Forgot Password?</Button>
            </Form> 
        : 
            <Form onSubmit={handleSubmit} className="row">
                {/* Shows the spinner */}
                <h2>{showSpinner ? <Spinner color="primary" /> : <span />}</h2>
                <input type="text" className="col-4" placeholder="username" name="username" style={{ margin: 5 }} maxLength={20}/>
                <input type="password" className="col-4" placeholder="**********" name="password" style={{ margin: 5 }} maxLength={20} />
                <input type="submit" name="log-btn" value="LOGIN" className="col-2 log-btn" style={{ margin: 5 }} />
                <Button onClick={toggleForgotPass} id="fpass" className="col-2">Forgot Password?</Button>
                <Form onSubmit={sendEmail}>
                    <input style={{margin:5}} type="email" name="emailF" placeholder="email"/>
                    <input style={{margin:5}} type="submit" className="" value="send password" />
                </Form>
            </Form>
                }
    </span>
    )
}

//recieves these values from the app's store
const mapStateToProps = (appState:any) => {
    return {
        userId: appState.loginState.id
    }
  }
  
  //HOC export right here babyyy
  export default connect<IProps>(mapStateToProps)(LoginComp);