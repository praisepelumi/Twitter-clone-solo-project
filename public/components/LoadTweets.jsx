import React from "react";
import UserImage from "./userImage";
import UserNameDisplay from "./UserNameDisplay";
import TextBox from "./TextBox";
import InteractButtons from "./InteractButtons";
import UserDisplayContainer from "../containers/UserDisplayContainer";

function LoadTweets ({setDisplay}) {
  function handleClick () {
    const allTweets = [];
    for (let i = 0; i < 3; i++) {
    allTweets.push(
      <UserDisplayContainer username={username} />
  
      )
    }
    
    setDisplay(allTweets)
  }
  return (
    <div>
      <button onClick={handleClick} className="loadTweets">Show Tweets</button>
    </div>
    
  )
}

export default LoadTweets;