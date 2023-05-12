import React from "react";
import { tweetLoader } from "../../actions.js/tweetLoader";
import { useState, useEffect } from 'react';

function TweetButton ({newTweet, tweetArr, userArr, display, setDisplay}) {
  // creates a post request to your newtweet end point
  const [box, setBox] = useState();
  async function handleClick (e) {
    // setDisplay([...display, newTweet])
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({newTweet})
    };
    await fetch('http://localhost:3000/newtweet/codesmith/', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("i came from here",data);
        
      })
      .then(() => {
        tweetLoader(tweetArr, userArr, setDisplay);
      })
      return;
      
    
      
    
      

  }
  return (
    <button onClick={ async () => { await handleClick(); 
       }} className="tweet-button">Tweet</button>
  )
};

export default TweetButton;