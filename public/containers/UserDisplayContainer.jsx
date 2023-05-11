import React, { useState } from "react";
import UserImage from "../components/userImage";
import UserNameDisplay from "../components/UserNameDisplay";
import TextBox from "../components/TextBox";
import InteractButtons from "../components/InteractButtons";




function UserDisplayContainer ({}) {
  
  return (
    <div className="user-display-container">
    <div className="image-username">
      <UserImage  />
      <UserNameDisplay  />
    </div>
    
    <TextBox/>
    <InteractButtons />
  </div>
   
  )
}


export default UserDisplayContainer;