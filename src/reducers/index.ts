import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";

export interface ILoginState{
    isLogged: boolean
}

//All of the different states from the different
// components
export interface IState{
    loginState: ILoginState
}

export const state = combineReducers<IState>({
    loginState: loginReducer,
})