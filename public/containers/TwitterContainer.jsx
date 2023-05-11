import React from 'react';
import { useState } from 'react';
import ForYouButton from '/public/components/ForYouButton.jsx';
import NewsFeed from '/public/components/NewsFeed.jsx';
import MainTweetBox from '../components/mainTweetBox';
import UserDisplayContainer from './UserDisplayContainer';
import LoadTweets from '../components/LoadTweets';



function TwitterContainer () {
  /* where first parameter is initialState. This is what state is initially. Value of any type
      argument is ignored after the initial render*/
  /*useState returns an array with exactly two values. The current state and set function
  current state matches initial state on first rended. Set function helps us update state*/
// const [username, setUsername] = useState(); 
// const [name, setName] = userState();
const [display, setDisplay] = useState();
// const [text, setText] = useState();
// const [src, setSrc] = useState();


  return (
    <div className="main-container">
      <div className="home">
        <p>Home</p>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className="nav-bar">
        <ForYouButton />
        <NewsFeed />
      </div>
      <MainTweetBox/>
      {/* set display updates our sate display */}
      <LoadTweets setDisplay={setDisplay}/>

      {/* // display is an array that contains 3 individual user display contianers */}
      {display}
      
      
      
    </div>
  )
}

export default TwitterContainer;