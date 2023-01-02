import React, { useState } from "react"
import Change from "./change"

const Control = () => {
  const [myName, setMyName] = useState("Udbhav")

  return (
    <div>
      <h2>{myName}</h2>

      <Change data={myName} changeData={setMyName} />
    </div>
  )
}

export default Control
