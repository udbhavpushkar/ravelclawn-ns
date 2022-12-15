import React, { useState } from "react"
import Btn from "./btn"

const Prashant = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <Btn change={setCount} />
    </div>
  )
}

export default Prashant
