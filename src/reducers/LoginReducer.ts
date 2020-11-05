import { ILoginState } from ".";
import { loginTypes } from "../actions/LoginAction";
// import { loginTypes } from "../actions/LoginAction";


export const initialState: ILoginState = {
    isLogged: false,
}

const loginReducer = (state = initialState, action:any) =>{
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

export default loginReducer;