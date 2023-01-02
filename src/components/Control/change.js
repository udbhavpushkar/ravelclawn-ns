import React, { useState } from "react"

const Change = (props) => {
  const [age, setAge] = useState(10)

  function changeParentData() {
    props.changeData("Mittal")
  }

  return (
    <div>
      <h3 onClick={changeParentData}>Change Comp : {props.data}</h3>
      <h3>Age : {age}</h3>
    </div>
  )
}

export default Change
