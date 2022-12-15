import React, { useState } from "react"

const Btn = (props) => {
  return (
    <button
      onClick={() => {
        props.change((prevState) => {
          console.log(prevState, "prev")
          return prevState + 1
        })
      }}
    >
      Increase
    </button>
  )
}

export default Btn
