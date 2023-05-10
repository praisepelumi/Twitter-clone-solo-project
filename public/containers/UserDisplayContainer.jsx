import React from "react";
import UserImage from "../components/userImage";
import UserNameDisplay from "../components/userNameDsiplay";
import TextBox from "../components/TextBox";
import TimeTweeted from "../components/timeTweeted";
import UpdateButton from "../components/UpdateButton";
import InteractButtons from "../components/InteractButtons";


function UserDisplayContainer () {

  return (
    <div className="user-display-container">
      <UserImage />
      <UserNameDisplay />
      <TimeTweeted />
      <UpdateButton />
      <TextBox />
      <InteractButtons />
    </div>
  )
}


export default UserDisplayContainer;