import React, { useState, useEffect, useRef } from 'react';
import "./Posts.scss";

interface IProps {
    userID: number
}

const PostCreate:React.FC<IProps> = (props:IProps) => {
    const [value, setValue] = useState(''); //value is state of text in textarea
    const [postText, setPostText] = useState('');

    const initialRender = useRef(true); //keep track of when component is initially rendered

    //updates the state value every time a user types in a letter into the textarea
    const updateText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setValue(e.currentTarget.value);
    }

    //Triggered everytime the user hits post
    const getText = (e: React.FormEvent<HTMLFormElement>) => {
        setPostText(value);
    }

    //Sends the post text and the userID to the endpoint to update the back-end
    const postData = async () => {
        fetch('endpoint-for-creating-posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({post: {postText}, userID: props.userID})
        });
    }

    //triggered when postText is updated (when user hits submit button)
    useEffect(() =>{
        if(initialRender.current) { //check whether component was just rendered
            initialRender.current = false;
        } else { //only submit post data when user presses submit button, not on initial render
            postData();
        }
    }, [postText]);

    return (
        <div className="postCreate" >
            <form className="postForm" onSubmit={getText}>
                <textarea value={value} cols={50} rows={3} onChange={updateText} placeholder="What's on your mind?"/>
                <button className="postButton" type="submit">
                    Post
                </button>
            </form>
        </div>
    )
}

export default PostCreate;