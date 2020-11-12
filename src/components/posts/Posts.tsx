import React, { useState, useEffect } from 'react';
import {user} from "../../util/Models";
import { axiosInstance} from "../../util/axiosConfig";
import {connect} from "react-redux";
import "./Posts.scss";

import unliked from '../../assets/emptyheart.png';
import liked from '../../assets/fullheart.png';

interface IProps {
    post_firstname: string,
    post_lastname: string,
    post_username: string,
    post_picurl: string,
    id: number,
    post_text:string,
    image: string,
    likes: number
}

const Post:React.FC<any> = (props:any) => {

    const [heart, setHeart] = useState(false);
    const [likes, setLikes] = useState(0);

    const imagesPath = {
        liked: liked,
        unliked: unliked
    }
    
    const toggleImage = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        axiosInstance.get("/likes/update/" + heart + "+" + props.id + "+" + props.userId).then((response) => {
            setHeart(!heart); //toggle heart image
        });
    }

    const getImageName = () => heart ? 'liked' : 'unliked';

    //triggers on load
    useEffect(() => {
        //get whether user has liked this post from the back-end
        axiosInstance.get("/likes/status/" + props.userId + "+" + props.id).then((response) => {
            setHeart(response.data); //response.data is either 0 or 1, 0 if user hasn't
                                     //liked post, 1 if user did like post
        });
        //Get amount of likes for this post from back-end
        axiosInstance.get("/likes/find/" + props.id).then((response) => {
            setLikes(response.data);
        });
    }, []);

    return (
        <div className="border">
            <img src={props.post_picurl} className="pic"></img>
            <div className="body">
                <span className="username">{props.post_firstname} {props.post_lastname} (@{props.post_username})</span>
                <div className="postText">{props.post_text}</div>
                <img src={props.image} className="image"></img>
            </div>
            <div className="postFooter">
                <span>{heart ? props.likes + 1 : props.likes} likes</span>
                <input type="image" className="heart" src={imagesPath[getImageName()]} onClick={toggleImage}/>
            </div>
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

export default connect<user>(mapStateToProps)(Post);