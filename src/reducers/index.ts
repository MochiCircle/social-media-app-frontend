import { combineReducers } from "redux";
import { user } from "../util/Models";
import { loginReducer } from "./LoginReducer";

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
}

//This bad boy is the one and only state that encompasses
// all other component's state and reducers
export const state = combineReducers<IState>({
    loginState: loginReducer,
})