import { ILoginState } from ".";
import { LoginTypes } from "../components/login/LoginActionTypes";
import { initialLoginState } from "../components/login/LoginInitialState";

export const loginReducer = (state:ILoginState = initialLoginState, action:any) =>{
    //checks if the right action occured
    switch(action.type){
        case LoginTypes.SET_LOGIN_STATE:
            return {
                ...state,
                ...action.payload,  //this is what we expect back from the api
                isLoggedIn: true,
            };
        default:
            return state;
    }
}

export default loginReducer;