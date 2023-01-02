import React, { useState } from "react"

const Comment = (props) => {
  const [likes, setLikes] = useState(0)
  return (
    <div className="tweet-comment">
      <div>
        {props.data.body} by <span className="link">{props.data.name}</span>
      </div>
      <button
        onClick={() => {
          props.setTotalLikes((prev) => prev + 1)
          setLikes(likes + 1)
        }}
      >
        Like
      </button>
      <span style={{ color: "blue", fontWeight: "600", paddingLeft: "10px" }}>{likes > 0 ? likes : ""}</span>
    </div>
  )
}

export default Comment
