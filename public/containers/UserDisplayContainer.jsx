import React from "react";
import UserImage from "../components/userImage";
import UserNameDisplay from "../components/userNameDsiplay";
import TextBox from "../components/TextBox";
import InteractButtons from "../components/InteractButtons";
import DropDownMenu from "../components/DropDownMenu";


function UserDisplayContainer () {

  return (
    <div className="user-display-container">
      <div class="image-username">
        <UserImage />
        <UserNameDisplay />
      </div>
      
      <TextBox />
      <InteractButtons />
    </div>
  )
}


export default UserDisplayContainer;