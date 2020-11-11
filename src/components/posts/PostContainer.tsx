import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {user} from "../../util/Models";
import Post from './Posts';
import { axiosInstance} from "../../util/axiosConfig";

interface Post {
    id: number,  //postID of post
    userid: number,  //userID of user that created the post
    username:string, //username of poster
    picurl:string,    //avatar of poster
    post_text:string, //post content
}

interface IProps {
    userId: number,
    loadType: boolean //true loads all posts regardless of user 
                      //false loads posts associated with userId
}

const PostContainer: React.FC<IProps> = (props: IProps) => {

    const [postArray, setPostArray] = React.useState<Post[]>([]);

    //Triggers on page load
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        let url;
        if(props.loadType) { //if loadtype is true, load all posts
            url = "/postview/";
        } else {            //if loadtype is false, load posts associated with logged in userid
            url = "/postview/find/" + props.userId; 
        }                                        

        axiosInstance.get(url).then((response) => {
            setPostArray(response.data);
        });
        
    }

    return (
        <div className="postContainer">
            {postArray.map(e => (
              <Post {...e}/>
          ))}
        </div>
    )
}

export default PostContainer;