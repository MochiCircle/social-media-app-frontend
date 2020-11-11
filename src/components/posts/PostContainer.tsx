import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {user} from "../../util/Models"
import Post from './Posts';
import { axiosInstance} from "../../util/axiosConfig"

interface Post {
    id: number,  //postID of post
    userid: number,  //userID of user that created the post
    username:string, //username of poster
    picurl:string,    //avatar of poster
    post_text:string, //post content
//    likes:number     //number of likes post has
//    likeStatus: boolean //whether post is liked or not
    //todo prop for datetime goes here
}

interface IProps {
    loadType: boolean //true loads all posts, false loads posts associated with userID
}

const PostContainer: React.FC<IProps> = (props: any) => {

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

export default connect<user>(mapStateToProps)(PostContainer);