import React, { useState } from "react"
import { useDispatch } from "react-redux"

const AddToCart = () => {
  const [num, setNum] = useState(0)
  const dispatch = useDispatch()

  return (
    <div>
      Add to cart from here
      <button
        onClick={() => {
          dispatch({ type: "INCREASE" })
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE" })
        }}
      >
        Remove from cart
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" })
        }}
      >
        Remove all item
      </button>
      <div>
        <input
          value={num}
          onChange={(e) => {
            setNum(e.target.value)
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADDTOCART", data: parseInt(num) })
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default AddToCart
