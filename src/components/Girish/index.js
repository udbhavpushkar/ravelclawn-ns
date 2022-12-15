import React, { useReducer } from "react"

let initialData = 0

function reducer(state, action) {
  if (action.type === "increase") {
    return state + 1
  }
  return state
}

const Girish = () => {
  // const [num, setNum] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialData)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      {/* <button onClick={() => }>Decrease</button> */}
    </div>
  )
}

export default Girish
