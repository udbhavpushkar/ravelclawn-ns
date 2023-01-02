import React, { useState } from "react"
import axios from "axios"
import Comment from "./comment"

const Tweet = (props) => {
  const [comments, setComments] = useState([])
  const [showComments, setShowComments] = useState(false)
  const fetchComments = async (id) => {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    setComments(response.data)
  }

  const toggleShow = () => {
    setShowComments((prev) => !prev)
  }

  return (
    <div className="tweet">
      <h3>{props.data.title}</h3>
      <div>{props.data.body}</div>
      <div
        className="link"
        onClick={() => {
          toggleShow()
          if (comments.length === 0) {
            fetchComments(props.data.id)
          }
        }}
      >
        {showComments ? "Hide" : "Show"} comments
      </div>
      {showComments ? (
        <div>
          {comments.map((item) => {
            return <Comment data={item} setTotalLikes={props.setTotalLikes} />
          })}
        </div>
      ) : null}
    </div>
  )
}

export default Tweet
