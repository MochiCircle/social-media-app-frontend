import React, { useState, useEffect } from 'react';
import Datetime from 'react-datetime';
import "./Posts.scss";

import unliked from '../../assets/emptyheart.png'
import liked from '../../assets/fullheart.png'

//todo implement datetime to display timestamp
//todo implement youtube api
interface IProps {
    username:string,
    image:string,
    postText:string,
    likes:number,
    likeStatus: boolean
    //todo prop for datetime goes here
}

const Post:React.FC<IProps> = (props:IProps) => {

    const [heart, setHeart] = useState(false);

    const imagesPath = {
        liked: liked,
        unliked: unliked
    }
    
    const toggleImage = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        setHeart(!heart); //toggle heart image
        fetch('endpoint-for-updating-likes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: {heart}})
        });
    }

    const getImageName = () => heart ? 'liked' : 'unliked';

    //triggers on load
    useEffect(() => {
        setHeart(props.likeStatus); //set whether post has already been liked or not
    }, []);
    return (
        <div className="border">
            <img src={props.image} className="pic"></img>
            <div className="body">
                <span className="username">{props.username}</span>
                <div className="postText">{props.postText}</div>
            </div>
            <div className="postFooter">
                <span>{heart ? props.likes + 1 : props.likes} likes</span>
                {/*datetime would go here*/}
                <input type="image" className="heart" src={imagesPath[getImageName()]} onClick={toggleImage}/>
            </div>
        </div>
    )
}

export default Post;