import { LoginTypes } from "../components/login/LoginActionTypes";
import axios from "axios";
import { useDispatch } from "react-redux";

const setLoginStateTrue = (loginData: any) => {
  return {
    type: LoginTypes.SET_LOGIN_TRUE,
    payload: loginData,
  };
};

const setLoginStateFalse = () => {
    return {
      type: LoginTypes.SET_LOGIN_FALSE,
      payload: null,
    };
  };



export function login (username:string,password:string):boolean {

    //console.log("given " + username);
    //console.log("given " + password);
    return function action(dispatch:any) {
        dispatch({LoginTypes.SET_LOGIN_TRUE})
    }


    axios.post(
            "http://localhost:8080/MochiCircle/api/users/validate/" +username+ "+"
            +password
            //these are the parameters that will be sent to the server
            // "username:" username, "password:" password
            //{ username, password }
        ).then((response) => {
            console.log(response.data);
            setLoginStateTrue(response.data);
            return true;
        })
        .catch ((error) => {
            alert("Login Failed: Credentials Error.");
            console.log(error);
            setLoginStateFalse();
            return false;
        });

        //just in case it fails right off the bat
        return false;
}
        
            //const json = response;
            

            // if (json.msg == 'success') {
            //     dispatch(setLoginState({ ...json, userId: json.userId }));
            //     alert("Login Successful! You're now logged in as: " + json.firstName + " " + json.lastName);
            // }
            // else {
            //     alert("Login Failed: Username or Password is incorrect");
            // }
        


