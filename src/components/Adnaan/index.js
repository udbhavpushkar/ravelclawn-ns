import React, { useEffect, useState, useRef } from "react"

const Adnaan = () => {
  const [num, setNum] = useState(0) //if we change state varibale , componenet is rendered again
  const count = useRef(0) // it wont re-render the component on change
  const inputRef = useRef() // initialise ref, value will be stored inside current object of ref

  useEffect(() => {
    console.log("rendered")
    console.log("again")
    console.log(count, "count bvalue")
  })

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increase</button>
      <button
        onClick={() => {
          count.current = count.current + 1
        }}
      >
        Test it
      </button>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
          inputRef.current.style.backgroundColor = "red"
          inputRef.current.value = "Asif"
        }}
      >
        Focus
      </button>
    </div>
  )
}

export default Adnaan
