import React from 'react';
import { useState } from 'react';
import ForYouButton from '/public/components/ForYouButton.jsx';
import NewsFeed from '/public/components/NewsFeed.jsx';
import MainTweetBox from '../components/mainTweetBox';
import UserDisplayContainer from './UserDisplayContainer';


function TwitterContainer () {
  return (
    <div className="main-container">
      <div className="home">
        <p>Home</p>

      
        <i class="fa-brands fa-twitter"></i>
       
       {/* <img src="public/assets/images/white-twitter-logo.png" alt="" /> */}
      </div>
      <div className="nav-bar">
        <ForYouButton />
        <NewsFeed />
      </div>
      <MainTweetBox/>

      <UserDisplayContainer />
      
    </div>

   
       
    
   
  )
}

export default TwitterContainer;