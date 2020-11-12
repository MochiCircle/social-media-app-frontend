import React, { useState, useEffect, useRef } from 'react';
import {user} from "../../util/Models";
import { axiosInstance} from "../../util/axiosConfig";
import {connect} from "react-redux";
import "./Posts.scss";

const PostCreate:React.FC<any> = (props:any) => {
    const [value, setValue] = useState(''); //value is state of text in textarea
    const [postText, setPostText] = useState('');
    const [imageFile, setImageFile] = useState("");

    const initialRender = useRef(true); //keep track of when component is initially rendered

    //updates the state value every time a user types in a letter into the textarea
    const updateText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setValue(e.currentTarget.value);
    }

    //Triggered everytime the user hits post
    const getText = (e: React.FormEvent<HTMLFormElement>) => {
        setImageFile(e.currentTarget["imageF"].files[0])
        setPostText(value); //this triggers sending the post in postData or postDataPhoto
    }

    //Sends the post text and the userID to the endpoint to update the back-end
    const postData = async () => {
        axiosInstance.get("/posts/update/" + props.userId + "+" + postText).then((response) => {
        });
    }

    const postDataPhoto = async () => {
        const formData = new FormData();
        formData.append("userid", props.userId);
        formData.append("postText", postText);
        formData.append("image", imageFile);
        axiosInstance.post("/posts/updatePhoto/", formData);
        /*axiosInstance.post("/posts/updatePhoto/", {
            "userid": props.userId,
            "postText": postText,
            "image": imageFile
        });*/
    }

    //triggered when postText is updated (when user hits submit button)
    useEffect(() =>{
        if(initialRender.current) { //check whether component was just rendered
            initialRender.current = false;
        } else { //only submit post data when user presses submit button, not on initial render
            //postData();
            postDataPhoto();
        }
    }, [postText]);

    return (
        <div className="postCreate" >
            <form className="postForm" onSubmit={getText}>
                <textarea value={value} cols={50} rows={3} onChange={updateText} placeholder="What's on your mind?"/>
                <input type="file" id="imageUpload" name="imageF"/>
                <button className="postButton" type="submit">
                    Post
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = (appState: any, ownProps: any) => {
    return {
        userId: appState.loginState.id,
        username: appState.loginState.username,
        password: appState.loginState.password,
        firstName: appState.loginState.firstname,
        lastName: appState.loginState.lastname,
        email: appState.loginState.email,
        pic: appState.loginState.picUrl,
        status: appState.loginState.status,
        bio: appState.loginState.bio,
        interests: appState.loginState.interests,
        verified: appState.loginState.verified,
    };
};

export default connect<user>(mapStateToProps)(PostCreate);