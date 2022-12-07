import React from "react"
//item, deleteQuote, index
const QuoteBox = ({ item, index, deleteQuote }) => {
  return (
    <div className="quote-box">
      <div>{item.quote}</div>
      <div style={{ fontWeight: "600" }}> - {item.author}</div>
      <div
        className="link"
        onClick={() => {
          deleteQuote(index)
        }}
      >
        Delete
      </div>
    </div>
  )
}

export default QuoteBox
