import React, { useState, useEffect } from "react"

const Timer = () => {
  const [time, setTime] = useState(0)
  const [inputTime, setInputTime] = useState("")
  let interval

  function handleStart() {
    if (!isNaN(inputTime)) {
      // check whether input is number
      setTime(inputTime)

      interval = setInterval(() => {
        setTime((cur) => {
          if (cur <= 1) {
            clearInterval(interval)
          }
          return cur - 1
        })
      }, 1000)
    } else {
      alert("Wrong Input, only number is accepted")
    }
  }

  return (
    <div className="timer-wrapper">
      <h2>Countdown Timer</h2>
      <h1>{time}</h1>
      <div>
        <div>
          <input
            type="text"
            value={inputTime}
            onChange={(e) => {
              setInputTime(e.target.value)
            }}
          />
        </div>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  )
}

export default Timer
