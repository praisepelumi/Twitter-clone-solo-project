import React from "react";
import { useState, useEffect } from 'react';
import TweetButton from "./buttons/TweetButton";

function MainTweetBox ({setDisplay, display, tweetArr, userArr}) {
  const [text, setText] = useState('');
  return (
    <div className="tweet-box">
      <div class='img-div'>
      <img src="https://www.ukeof.org.uk/images/TwitterLogo_55acee.png/@@images/image.png" />
      </div>
      <div className="input-and-image">
      <input 
      value={text}
      onChange={e => setText(e.target.value)}
      type="text" placeholder="What's happening?" />
      </div>
      <TweetButton setDisplay={setDisplay} display={display} newTweet={text} tweetArr={tweetArr} userArr={userArr}/>
    </div>
  );
};

export default MainTweetBox;