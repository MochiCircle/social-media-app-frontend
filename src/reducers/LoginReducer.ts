import { ILoginState } from ".";
import { loginTypes } from "../actions/LoginAction";


const initialState: ILoginState = {
    isLogged: false,
}

export const loginReducer = (state = initialState, action:any):ILoginState =>{
    //checks if the right action occured
    switch(action.type){
        case loginTypes.LOGIN_SUCCESSFUL:
            return {isLogged: true};
        case loginTypes.WRONG_PASSWORD:
            return {isLogged: false};
        case loginTypes.WRONG_USERNAME:
            return {isLogged: false};
    }
}