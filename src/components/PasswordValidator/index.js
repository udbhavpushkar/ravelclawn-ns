import React, { useEffect, useState } from "react"

const PasswordValidator = () => {
  const [password, setPassword] = useState("")

  const [letters, setLetters] = useState(false)
  const [digits, setDigits] = useState(false)
  const [size, setSize] = useState(false)

  useEffect(() => {
    //check condition here
    //check length
    if (password.length > 10) {
      setSize(true)
    } else {
      setSize(false)
    }

    //check digit
    if (/\d/.test(password)) {
      setDigits(true)
    } else {
      setDigits(false)
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      setLetters(true)
    } else {
      setLetters(false)
    }
  }, [password])

  function checkPassword(e) {
    setPassword(e.target.value)
  }

  return (
    <div>
      <div>
        <input type="text" value={password} onChange={checkPassword} />
      </div>
      <h2 style={{ color: letters ? "green" : "red" }}>Password should have small and capital letters.</h2>
      <h2 style={{ color: digits ? "green" : "red" }}>Password should have digit.</h2>
      <h2 style={{ color: size ? "green" : "red" }}>Password should be more than 10 characters.</h2>
    </div>
  )
}

export default PasswordValidator
