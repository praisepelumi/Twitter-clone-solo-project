import React from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function DropDownMenu () {
    return (
        <div>
           <li class="drop-down-item"><UpdateButton/></li> 
           <li class="drop-down-item"><DeleteButton/></li> 
        </div>
    )
}

export default DropDownMenu;