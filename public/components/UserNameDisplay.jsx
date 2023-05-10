import React from "react";
import TimeTweeted from "./timeTweeted";
import DropDownMenu from "./DropDownMenu";

function UserNameDisplay () {
  return (
    <div className="user-name-display">
      <div className="name-and-handle-container">
        <span className="full-name">LEYE LEX</span> 
        <span className="twitter-handle">@leyeConnect</span> <span><TimeTweeted/></span>
      </div>


      <DropDownMenu />
      
      
      
    </div>
  )
}

export default UserNameDisplay;