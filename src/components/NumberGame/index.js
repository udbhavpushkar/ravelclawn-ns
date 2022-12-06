import React, { useState } from "react"

const NumberGame = () => {
  const [num, setNum] = useState(10)
  const [inputNum, setInputNum] = useState(0)

  const [text, setText] = useState("")

  const handleChange = (e) => {
    setInputNum(parseInt(e.target.value))
  }

  const handleTogglePassword = () => {
    setIsPassword(!isPassword) //toggle => if isPAssword is true makes it false , if false makes it true
  }

  const [isPassword, setIsPassword] = useState(true)

  return (
    <div>
      <h2>Current Number : {num}</h2>
      <input type="number" value={inputNum} onChange={handleChange} />
      <button
        onClick={() => {
          setNum(num + inputNum)
        }}
      >
        Submit
      </button>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <h1>{text}</h1>

      <div>
        <input type={isPassword ? "password" : "text"} />
        <button onClick={handleTogglePassword}>Show Password</button>
      </div>
    </div>
  )
}

export default NumberGame
