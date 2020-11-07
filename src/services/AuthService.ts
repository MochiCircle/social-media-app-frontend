import axios from "axios";

const URL = "localhost:8000/";

const registerEx = (username:string, password:string, 
    firstName: string, lastName: string, email:string) => {

    return axios
    //sends these fields in a post request to the server
    .post(URL + "signout", {
        username,
        password,
        firstName,
        lastName,
        email
    })
}

//define below whether you have logged in or not
const loginEx = (username:string, password:string) => {
    return axios
    //sends this user data to the server in a post request
    // using the "/signin" url pattern
    .post(URL + "signin", {
        username,
        password
    })
    //will get a response from the server with a boolean mentioning
    // whether your credentials were correct
    .then((response) => {
        if(response.data.accessToken)
        {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data);

        return response.data;
    });  
}

const logoutEx = () => {
    localStorage.removeItem("user");
}

// export default {
//     register,
//     login,
//     logout
// }