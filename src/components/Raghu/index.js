import React, { useEffect, useMemo, useState } from "react"

const Raghu = () => {
  // if state is changed, component is re-rendered
  // functions will get called on every re-render
  const [num, setNum] = useState(0)
  const [isClicked, setIsCliked] = useState(false)

  function increase() {
    setNum((prev) => prev + 1)
  }

  function waiting(x) {
    for (let i = 0; i <= 1000000000; i++) {} // sum time taking function in your app
    console.log(x, "wait")
    return x + 3
  }

  function toggle() {
    setIsCliked((prev) => !prev)
  }

  // const myNumber = waiting(num) // function will get executed when re-rendered
  const myNumber = useMemo(() => {
    return waiting(num)
  }, [num]) // function will be called when state in dependency array gets changed

  return (
    <div style={{ fontSize: "22px", width: "100%", textAlign: "center" }}>
      <button onClick={increase}>Increase</button>
      <h2>{num}</h2>
      <button onClick={toggle}>{isClicked ? "Already Clicked" : "Please click"}</button>
    </div>
  )
}

export default Raghu
