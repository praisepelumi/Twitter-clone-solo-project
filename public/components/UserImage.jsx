import React from "react";

function UserImage ({src}) {
  return (
    <div className="profile-photo">
      <img src={src} alt="" />
    </div>
    
  )
}

export default UserImage;