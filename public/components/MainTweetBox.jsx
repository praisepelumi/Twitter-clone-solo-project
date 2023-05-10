import React from "react";
import ImageButton from "./imageButton";
import TweetButton from "./tweetbutton";

function MainTweetBox () {
  return (
    <div className="tweet-box">
      <div class='img-div'>
      <img src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </div>
      <div className="input-and-image">
      <input type="text" placeholder="What's happening?" />
      {/* <ImageButton/> */}
      </div>
      <TweetButton/>
    </div>
  );
};

export default MainTweetBox;