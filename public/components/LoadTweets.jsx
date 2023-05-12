import React from "react";
import axios, {isCancel, AxiosError} from 'axios';
import UserDisplayContainer from "../containers/UserDisplayContainer";
import { tweetLoader } from "../actions.js/tweetLoader";
// import { fetchData } from "../actions.js/fetchData";
function LoadTweets ({setDisplay, tweetArr, userArr, fetchData}) {

  function handleClick () {
    tweetLoader(tweetArr, userArr, setDisplay);
  }
 
  // function handleClick () {
  //   const allTweets = [];
  //   let fullName;
  //   let imgSrc;
  //   for (let i = tweetArr.length - 1; i >= 0; i--) {
  //     for (let j = 0; j < userArr.length; j++) {
  //       if(tweetArr[i].username === userArr[j].username) {
  //         fullName = userArr[j].fullname;
  //         imgSrc = userArr[j].src;
  //       }
  //     }
  //     allTweets.push(
  //       <UserDisplayContainer username={tweetArr[i].username} tweet={tweetArr[i].text} fullname={fullName} src={imgSrc}  />
        
  //       )
  //   }
  //   setDisplay(allTweets)
  // }
  return (
    <div>
      <button onClick={handleClick} className="loadTweets">Show Tweets</button>
    </div>
    
  )
}

export default LoadTweets;