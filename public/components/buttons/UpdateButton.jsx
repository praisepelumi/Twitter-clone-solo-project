import React from "react";

function UpdateButton ({tweetId}) {
  async function handleClick () {
    fetch(`http://localhost:3000/delete${tweetId}`, { method: 'PATCH' })
        .then(() => setStatus('Delete successful'));
  }
  return (
    <button onClick={handleClick} className="updateButton udButton">Update Tweet</button>
  )
}

export default UpdateButton;
