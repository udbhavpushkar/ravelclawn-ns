import React, { useState } from "react"
import Style from "./navbar.module.css"

const Navbar = () => {
  let items = ["Home", "About Us", "Downloads", "Contact US", "Gallery"]

  // let buttonName = "Login"
  const [buttonName, setButtonName] = useState("Login")

  // let afterMap = items.map((item) => item + " mapped by udbhav")
  // console.log(afterMap)

  let btnStyle = { padding: "5px 10px", borderRadius: "6px", textAlign: "center", backgroundColor: "red", color: "white" }

  function example(name) {
    console.log(`Clicked on ${name}`)
  }

  return (
    <div className={Style.nav} style={{ padding: "30px 20px", backgroundColor: items.length > 4 ? "#999" : "purple" }}>
      {items.map((item, index) => {
        return (
          <div
            onClick={(e) => {
              example(item)
            }}
            className={`${Style.items} ${item.length >= 5 ? Style.large : Style.small}`}
            key={index}
          >
            {item}
          </div>
        )
      })}
      <div
        onClick={() => {
          setButtonName("Register")
        }}
        className={Style.rutvik}
        style={btnStyle}
      >
        {buttonName}
      </div>
    </div>
  )
}

export default Navbar
