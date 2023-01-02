import React, { useEffect, useState } from "react"
import axios from "axios"
import Tweet from "./tweet"

const Twitter = () => {
  const [allTweets, setAllTweets] = useState([])
  const [totalLikes, setTotalLikes] = useState(0)

  useEffect(() => {
    fetchTweets()
  }, [])

  const fetchTweets = async () => {
    try {
      //get data
      let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
      console.log(response.data)
      //set data into allTweets
      setAllTweets(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="twitter-wrapper">
      <h1>All Posts</h1>
      <h2>Total Likes Count : {totalLikes}</h2>
      <div>
        {allTweets.map((item) => {
          return <Tweet key={item.id} data={item} setTotalLikes={setTotalLikes} />
        })}
      </div>
    </div>
  )
}

export default Twitter
