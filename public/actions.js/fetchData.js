
export function fetchData () {
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
}
