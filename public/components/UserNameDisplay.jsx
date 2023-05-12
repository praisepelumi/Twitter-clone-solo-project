import React from "react";
import TimeTweeted from "./timeTweeted";
import DropDownMenu from "./DropDownMenu";

function UserNameDisplay ({username, fullname, tweetId, tweetArr, userArr, setDisplay}) {
  return (
    <div className="user-name-display">
      <div className="name-and-handle-container">
        <span className="full-name">{fullname}</span> 
        <span className="twitter-handle">@{username}</span> <span><TimeTweeted/></span>
      </div>


      <DropDownMenu tweetId={tweetId} tweetArr={tweetArr} userArr={userArr} setDisplay={setDisplay} />
      
      
      
    </div>
  )
}

// cluster
// database
// collection
// documents
export default UserNameDisplay;