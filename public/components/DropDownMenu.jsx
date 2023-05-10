import React from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function DropDownMenu () {
    return (
        <div className="update-delete-container">
           <span className="drop-down-item"><UpdateButton/></span> 
           <span className="drop-down-item"><DeleteButton/></span> 
        </div>
    )
}

export default DropDownMenu;