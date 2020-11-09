import { LoginTypes } from "../components/login/LoginActionTypes";
import axios from "axios";

const setLoginState = (loginData: any) => {
  return {
    type: LoginTypes.SET_LOGIN_STATE,
    payload: loginData,
  };
};

interface ILoginCred {
  username: any;
  password: any;
}

export function login(loginCred: ILoginCred) {
  const { username, password } = loginCred;

  //console.log("given " + username);
  //console.log("given " + password);

  return async (dispatch: any) => {
    try {
      const response = await axios.post(
        "localhost:8000/" + "users",
        //these are the parameters that will be sent to the server
        // "username:" username, "password:" password
        { username, password }
      );
      const json = response.data;
      console.log("response json object: " + json);

      if (json.data.msg == "success") {
        dispatch(setLoginState({ ...json, userId: json.userId }));
        alert(
          "Login Successful! You're now logged in as: " +
            json.firstName +
            " " +
            json.lastName
        );
      } else {
        alert("Login Failed: Username or Password is incorrect");
      }
    } catch (error) {
      alert("Login Failed: An error occured outside of the credentials.");
      console.log(error);
    }
  };
}
