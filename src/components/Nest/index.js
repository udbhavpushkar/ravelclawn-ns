import React, { createContext, useContext, useState } from "react"

const DataContext = createContext() // global state

const Nest2 = (props) => {
  const someData = useContext(DataContext)
  return (
    <div>
      <h2>This is nest 2 {someData}</h2>
      <Nest3 data={props.data} />
    </div>
  )
}

const Nest3 = (props) => {
  return (
    <div>
      <h2>This is nest 3 </h2>
      <Nest4 data={props.data} />
    </div>
  )
}

const Nest4 = (props) => {
  const girishData = useContext(DataContext)

  return (
    <div>
      <h2>This is nest 4 {girishData}</h2>
    </div>
  )
}

const Nest = () => {
  const [data, setData] = useState("Nitin")

  return (
    <DataContext.Provider value={data}>
      <div>
        <h1>This is Nest 1 {data}</h1>
        <Nest2 data={data} />
      </div>
    </DataContext.Provider>
  )
}

// Main => Sidebar => Popup => AnswerBox

export default Nest
