import { ILoginState } from "../../reducers";

export const initialLoginState:ILoginState = {
    id: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    picUrl: "",
    status: "",
    bio: "",
    interests: "",
    posts: null,
    likedPosts: null
}