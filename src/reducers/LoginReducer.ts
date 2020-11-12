import { ILoginState } from ".";
import { initialLoginState } from "../components/login/LoginInitialState";
import { setLoginState, SET_USER } from "../actions/LoginAction";
import { axiosInstance } from "../util/axiosConfig";
import { useDispatch } from "react-redux";
import { setAlert } from "../actions/AlertAction";

export const loginReducer = (
  state: ILoginState = initialLoginState,
  action: any
) => {
  //checks if the right action occured
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload, //this is what we expect back from the api
      };
    default:
      return state;
  }
};

export const loadUser = (username: string, password: string) => async (
  dispatch: any,
  getState: any
) => {
  //gets the user from the backend using the passed in username and password
  const user = await axiosInstance
    .post("/users/validate/", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data === "") {
        dispatch(setAlert("Login Failed: Credentials Error.", "danger", 5000));
        console.log(response);
        return null;
      } else {
        console.log(response.data);
        dispatch(
          setAlert(
            "**SUCCESSFUL LOGIN** as: " +
              response.data.firstname +
              response.data.lastname,
            "success",
            5000
          )
        );
        return response.data;
      }
    })
    .catch((error) => {});

  //if no user data was returned then revert back to initial unloggedin state
  if (user != null) {
    dispatch(setLoginState(user));
  }
  //if no user data was returned then revert back to initial unloggedin state
  else {
    dispatch(setLoginState(initialLoginState));
  }
};

export default loginReducer;
