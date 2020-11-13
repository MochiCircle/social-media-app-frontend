import React, { useState, useEffect } from "react";
import { user } from "../../util/Models";
import { axiosInstance } from "../../util/axiosConfig";
import { connect } from "react-redux";
import "./Posts.scss";

import unliked from "../../assets/emptyheart.png";
import liked from "../../assets/fullheart.png";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

interface IProps {
  post_userid: number;
  post_firstname: string;
  post_lastname: string;
  post_username: string;
  post_picurl: string;
  id: number;
  post_text: string;
  image: string;
  likes: number;
  liked: boolean;
}

const Post: React.FC<any> = (props: any) => {
  const [heart, setHeart] = useState(props.liked);
  const [likes, setLikes] = useState(0);

  const imagesPath = {
    liked: liked,
    unliked: unliked,
  };

  const toggleImage = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    axiosInstance
      .get("/likes/update/" + heart + "+" + props.id + "+" + props.userId)
      .then((response) => {
        setHeart(!heart); //toggle heart image
      });
  };

  const getImageName = () => (heart ? "liked" : "unliked");

  const youtubeRegex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;

  return (
    <div className="border">
      <Link to={`/profile/${props.post_userid}`}>
        <img src={props.post_picurl} className="pic"></img>
      </Link>

      <div className="body">
        <span className="username">
          <Link to={`/profile/${props.post_userid}`}>
            {props.post_firstname} {props.post_lastname} (@{props.post_username}
            )
          </Link>
        </span>
        <div className="postText">{props.post_text}</div>
        {props.post_text.match(youtubeRegex) && (
          <YouTube id={props.post_text.match(youtubeRegex)} />
        )}
        <img src={props.image} className="image"></img>
      </div>
      <div className="postFooter">
        <span>{heart ? props.likes + 1 : props.likes} likes</span>
        <input
          type="image"
          className="heart"
          src={imagesPath[getImageName()]}
          onClick={toggleImage}
        />
      </div>
    </div>
  );
};

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
