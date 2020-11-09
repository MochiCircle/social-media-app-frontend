import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";

export interface ILoginState{
    isLoggedIn: boolean,
    userId: number,
    token: string,
    data: string
}

//All of the different states from the different
// components
export interface IState{
    loginState: ILoginState
    // insert your state here
}

// export const state = combineReducers<IState>({
//     // loginState: loginReducer,
// })
