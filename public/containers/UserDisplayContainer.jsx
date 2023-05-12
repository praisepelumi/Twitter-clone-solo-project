import React, { useState } from "react";
import UserImage from "../components/userImage";
import UserNameDisplay from "../components/UserNameDisplay";
import TextBox from "../components/TextBox";
import InteractButtons from "../components/buttons/InteractButtons";




function UserDisplayContainer ({username, fullname, src, tweet, tweetId, tweetArr, userArr, setDisplay}) {
  
  return (
    <div className="user-display-container">
    <div className="image-username">
      <UserImage src={src}  />
      <UserNameDisplay username={username} fullname={fullname} tweetId={tweetId} userArr={userArr} tweetArr={tweetArr} setDisplay={setDisplay}  />
    </div>
    
    <TextBox tweet={tweet}/>
    <InteractButtons />
  </div>
   
  )
}


export default UserDisplayContainer;