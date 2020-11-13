import React, { useEffect } from "react";
import { connect } from "react-redux";
import { user } from "../../util/Models";
import Post from "./Posts";
import { axiosInstance } from "../../util/axiosConfig";

interface Post {
  post_firstname: string;
  post_lastname: string;
  post_username: string;
  post_picurl: string;
  id: number;
  post_text: string;
  image: string;
  likes: number;
  liked?: boolean;
}

interface IProps {
  userId: number;
  loadType: boolean; //true loads all posts regardless of user
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
    if (props.loadType) {
      //if loadtype is true, load all posts
      url = "/postview/";
    } else {
      //if loadtype is false, load posts associated with userid
      url = "/postview/find/" + props.userId;
    }

    let response = await axiosInstance.get(url);
    const postsCall: Post[] = response.data;
    console.log(postsCall);
    response = await axiosInstance.get("/likes/findByUserId/" + props.userId);
    const likes: Number[] = response.data;
    const newPostsArray = postsCall.map((p) => {
      return { ...p, liked: likes.includes(p.id) };
    });
    console.log(newPostsArray);
    setPostArray(newPostsArray);
  };

  return (
    <div className="postContainer">
      {postArray.map((e) => (
        <>
          <Post {...e} />
          <br></br>
        </>
      ))}
    </div>
  );
};

export default PostContainer;
