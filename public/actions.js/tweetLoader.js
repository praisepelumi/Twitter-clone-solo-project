import React from 'react';
import UserDisplayContainer from '../containers/UserDisplayContainer';

export function tweetLoader(tweetArr, userArr, setDisplay) {
  const allTweets = [];
  let fullName;
  let imgSrc;
  
  for (let i = tweetArr.length - 1; i >= 0; i--) {
    for (let j = 0; j < userArr.length; j++) {
      if (tweetArr[i].username === userArr[j].username) {
        fullName = userArr[j].fullname;
        imgSrc = userArr[j].src;
        
      }
    }
    allTweets.push(
      <UserDisplayContainer
        username={tweetArr[i].username}
        tweet={tweetArr[i].text}
        fullname={fullName}
        src={imgSrc}
        tweetId={tweetArr[i]._id}
        tweetArr={tweetArr}
        userArr={userArr}
        setDisplay={setDisplay}
      />
    );
  }
  setDisplay(allTweets);
}