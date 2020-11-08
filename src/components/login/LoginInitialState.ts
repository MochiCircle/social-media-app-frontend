import { ILoginState } from "../../reducers";

export const initialLoginState:ILoginState = {
    isLoggedIn: false,
    userId: 0,
    expiresOn: "",
    token: "",
    refreshToken: '',
    data: ""
}