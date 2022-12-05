import React from "react"
import "./App.css"

const Counter = () => {
  function sayHello() {
    return <div>Hello everyone</div>
  }

  return (
    <>
      <div className="App">
        Hey this is counter {sayHello()}
        {sayHello()}
      </div>
      <div>hdashjdga</div>
    </>
  )
}

export default Counter
