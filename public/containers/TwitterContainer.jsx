import React from 'react';
import { useState, useEffect } from 'react';
import ForYouButton from '../components/buttons/ForYouButton';
import NewsFeed from '/public/components/NewsFeed.jsx';
import MainTweetBox from '../components/mainTweetBox';
import UserDisplayContainer from './UserDisplayContainer';
import LoadTweets from '../components/LoadTweets';



function TwitterContainer () {
  /* where first parameter is initialState. This is what state is initially. Value of any type
      argument is ignored after the initial render*/
  /*useState returns an array with exactly two values. The current state and set function
  current state matches initial state on first rended. Set function helps us update state*/

const [display, setDisplay] = useState();
const [tweetArr, setTweetArr] = useState();
const [userArr, setUser] = useState();

// function fetchData () {
//   fetch('http://localhost:3000/tweets')
//     .then(response => response.json())
//     .then(data => {
//       setTweetArr(data)
//     })
//     .catch(err => {
//       console.log('There was an error getting tweets', err)
//     });
  
//   fetch('http://localhost:3000/loadusers')
//     .then(response => response.json())
//     .then(data => {
//       setUser(data)
//     })
//     .catch(err => {
//       console.log('There was an error getting users', err)
//     });
// }

  useEffect(() => {
    // GET request using fetch  inside the useEffect React hook
    const interval = setInterval(() => {
      fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        setTweetArr(data)
      })
      .catch(err => {
        console.log('There was an error getting tweets', err)
      });
    
    fetch('http://localhost:3000/loadusers')
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
      .catch(err => {
        console.log('There was an error getting users', err)
      });
    }, 500); // runs every 1 second
    
    return () => clearInterval(interval); // This cleans up the interval when the compnent unmounts to prevent any memory leaks
  }, [])

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
      <MainTweetBox setDisplay={setDisplay} display={display} tweetArr={tweetArr} userArr={userArr}/>
      {/* set display updates our sate display */}
      <LoadTweets setDisplay={setDisplay} tweetArr={tweetArr} userArr={userArr}/>

      {/* // display is an array that contains 3 individual user display contianers */}
      {display}
      
      
      
    </div>
  )
}

export default TwitterContainer;