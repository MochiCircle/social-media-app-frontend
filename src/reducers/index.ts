import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";

export interface ILoginState{
    id: number,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    email: string,
    picUrl: string,
    status: string,
    bio: string,
    interests: string,
    posts: any,
    likedPosts: any,
    verified: boolean
}

//All of the different states being tracked go here:
export interface IState{
    loginState: ILoginState
    // insert your state here
}

// export const state = combineReducers<IState>({
//     // loginState: loginReducer,
// })
