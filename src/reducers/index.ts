import { combineReducers } from "redux";
import { user } from "../components/Models";
import { loginReducer } from "./LoginReducer";

export interface ILoginState{
    isLogged: boolean,
    user: user
}

//All of the different states from the different
// components
export interface IState{
    loginState: ILoginState
}

export const state = combineReducers<IState>({
    loginState: loginReducer,
})