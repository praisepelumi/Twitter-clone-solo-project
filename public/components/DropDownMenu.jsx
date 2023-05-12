import React from "react";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

function DropDownMenu ({tweetId, tweetArr, userArr, setDisplay}) {
    return (
        <div className="update-delete-container">
           <span className="drop-down-item">< UpdateButton tweetId={tweetId} userArr={userArr} tweetArr={tweetArr} setDisplay={setDisplay}/></span> 
           <span className="drop-down-item"><DeleteButton tweetId={tweetId}  tweetArr={tweetArr} setDisplay={setDisplay}/></span> 
        </div>
    )
}

export default DropDownMenu;