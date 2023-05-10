import React from "react";
import TimeTweeted from "./timeTweeted";
import DropDownMenu from "./DropDownMenu";

function UserNameDisplay () {
  return (
    <div className="user-name-display">
      <span className="full-name">LEYE LEX</span> 
      <span className="twitter-handle">@leyeConnect</span> <span><TimeTweeted/></span>

      <div>
      <DropDownMenu />
      </div>
    </div>
  )
}

export default UserNameDisplay;