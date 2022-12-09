import React, { useEffect, useState } from "react"

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

  //useEffect without dependency is component on update/rendered
  /* useEffect(() => {
    console.log("Something")
    let timer = setInterval(() => {
      setRuns(runs + 1)
    }, 1000)
    //cleanup function => exectues on unmounting or un-rendereing of the component
    return () => {
      clearInterval(timer)
    }
  }) */

  //useEffect with empty dependency array => component on mount / first time render
  useEffect(() => {
    console.log("Componnet")
    console.log("mounted")
    //call api to fetch list of online friends
    // fetchFriends()
  }, [])

  useEffect(() => {
    if (runs === 5) {
      alert("Hey its 5")
    }
    console.log("Something is dependent")
  }, [runs])

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
