import React from "react"

const StudentData = (props) => {
  return (
    <div className="list-item">
      <div>{props.data.username}</div>
      <div>{props.data.email}</div>
      <div>{props.data.city}</div>
      <div>{props.data.gender}</div>
      <div>{props.data.phone}</div>
    </div>
  )
}

export default StudentData
