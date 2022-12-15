import React, { useState } from "react"
import StudentData from "./StudentData"
import "./style.css"

const Forms = () => {
  const [userData, setUserData] = useState({})
  const [studentList, setStudentList] = useState([])

  /* let studentList = [
    { name: "Udbhav", email: "udbhav@gmail.com", city: "Ayodhya", gender: "male" },
    { name: "Narendra", email: "udbhav@gmail.com", city: "Delhi", gender: "male" },
    { name: "Raghu", email: "udbhav@gmail.com", city: "Noida", gender: "male" },
  ] */

  const [displayMessage, setDisplay] = useState("")

  function handleFormSubmit(e) {
    e.preventDefault()

    let data = [...studentList]
    data.push(userData)
    setUserData({})
    setStudentList(data)

    e.target.reset()
    //send userData through api
  }

  function handleChange(e) {
    let data = { ...userData }
    data[e.target.name] = e.target.value
    setUserData(data)
  }

  return (
    <div style={{ fontSize: "22px", width: "100%", textAlign: "center" }}>
      <h1>Form Hanlde</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input type="text" name="username" onChange={handleChange} placeholder="Enter Username" />
        </div>
        <div>
          <input type="text" name="email" onChange={handleChange} placeholder="Enter email" />
        </div>
        <div>
          <input type="text" name="city" onChange={handleChange} placeholder="Enter City" />
        </div>
        <div>
          <input type="text" name="phone" onChange={handleChange} placeholder="Enter Phone" />
        </div>
        <div>
          <select name="gender" onChange={handleChange}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="others">Others</option>
          </select>
        </div>
        <button>Submit</button>
      </form>

      <div className="list">
        {studentList.map((item, index) => {
          return <StudentData key={index} data={item} />
        })}
      </div>

      <h2>{displayMessage}</h2>
    </div>
  )
}

export default Forms
