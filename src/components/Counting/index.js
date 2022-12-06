import React, { useState } from "react"

export default function Counting() {
  const [count, setCount] = useState(0)
  const [runs, setRuns] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div style={{ fontSize: "22px", paddingLeft: "20px" }}>
      <div>Current Number : {count}</div>
      <button onClick={increase}>Increase</button>
      {/* if count > 0 then show button */}
      {count > 0 ? <button onClick={decrease}>Decrease</button> : null}

      <h1>Score Board</h1>
      <h3>Runs : {runs}</h3>
      <button
        onClick={() => {
          setRuns(runs + 1)
        }}
      >
        Single
      </button>
      <button
        onClick={() => {
          setRuns(runs + 4)
        }}
      >
        Four
      </button>
      <button
        onClick={() => {
          setRuns(runs + 6)
        }}
      >
        Six
      </button>
    </div>
  )
}
