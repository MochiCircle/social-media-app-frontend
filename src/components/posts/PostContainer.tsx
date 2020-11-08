import React, { useEffect } from 'react';
import Post from './Posts';

interface Post {
    username:string,
    image:string,
    postText:string,
    likes:number
    likeStatus: boolean
    //todo prop for datetime goes here
}

interface IProps {
    userID: string,
    loadType: boolean //true loads all posts, false loads posts associated with userID
}

const PostContainer: React.FC<IProps> = (props: IProps) => {

    const [postArray, setPostArray] = React.useState<Post[]>([]);

    //Triggers on page load
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        let url;
        if(props.loadType) {
            url = "url-with-endpoint fetching-all-posts"; //todo replace with actual endpoint
        } else {
            url = "url-with-endpoint-fetching-single-user-posts"; //todo replace with actual endpoint and do string interpolation
        }                                                         
        const res = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userID: props.userID, loadType: props.loadType})
        });
        
        const data = await res.json();
        setPostArray(data);
    }

    return (
        <div className="postContainer">
            {postArray.map(e => (
              <Post username={e.username} image={e.image} postText={e.postText} likes={e.likes} likeStatus= {e.likeStatus}/>
          ))}
        </div>
    )
}

export default PostContainer;