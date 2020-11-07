import React from 'react';
import Datetime from 'react-datetime';
import "./Posts.scss";
import like from '../../assets/emptyheart.png'

//todo implement datetime to display timestamp
//todo implement youtube api
interface IProps {
    username:string,
    image:string,
    postText:string,
    likes:number
    //todo prop for datetime goes here
}

const Post:React.FC<IProps> = (props:IProps) => {
    return (
        <div className="border">
            <img src={props.image} className="pic"></img>
            <div className="body">
                <span className="username">{props.username}</span>
                <div className="postText">{props.postText}</div>
            </div>
            <div className="postFooter">
                <span>{props.likes} likes</span>
                {/*datetime would go here*/}
                {/* todo change like button when clicked and update server*/}
                <input type="image" className="heart" src={like}/>
            </div>
        </div>
    )
}

export default Post;