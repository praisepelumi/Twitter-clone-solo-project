import React from "react";
import { tweetLoader } from "../../actions.js/tweetLoader";

function DeleteButton ({tweetId, setDisplay, tweetArr, userArr}) {
    function handleClick () {
        fetch(`http://localhost:3000/delete/${tweetId}`, { method: 'DELETE' })
        .then(() => console.log('Delete successful'));

        
            
    }
    return (
        <button onClick={handleClick} className="deleteButton udButton">Delete Tweet</button>
    )
}

export default DeleteButton;