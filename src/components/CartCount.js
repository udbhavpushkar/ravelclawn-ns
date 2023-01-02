import React from "react"
import { useSelector } from "react-redux"

const CartCount = () => {
  const count = useSelector((state) => state.counter)

  return <div>This is Cart Count Current Items are : {count}</div>
}

export default CartCount
