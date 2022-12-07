import React, { useState, useEffect } from "react"
import QuoteBox from "./quoteBox"
import "./style.css"

const data = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
]
// CRUD => Create, Read, Delete, Update
const Quotes = () => {
  const [quoteData, setQuoteData] = useState(data)

  // State varibles to control input fields
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  //useEffect without dependency is component on update
  useEffect(() => {
    console.log("Something")
    console.log("Updated in our component")
  })

  //useEffect with empty dependency array component on mount
  useEffect(() => {
    console.log("Componnet")
    console.log("mounted")
  }, [])

  useEffect(() => {
    console.log("Quote is")
    console.log("been updated")
  }, [quote])

  const deleteQuote = (i) => {
    let myData = [...quoteData]
    myData.splice(i, 1) // delete element of index i from an array
    setQuoteData(myData) // set the new value of quoteData using special function.
  }

  const submitQuote = () => {
    let myData = [...quoteData] // copy all quotes in new variable
    let newQuote = { quote: quote, author: author } // new element
    myData.push(newQuote) // add new elemnet in array
    setQuoteData(myData)
  }

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <div className="form-wrapper">
        <input
          type="text"
          value={quote}
          onChange={(e) => {
            setQuote(e.target.value)
          }}
          placeholder="Enter Quote"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
          placeholder="Enter Author"
        />
        <button onClick={submitQuote}>Submit</button>
      </div>
      <h1>All Quotes</h1>
      {quoteData.map((item, index) => {
        return <QuoteBox item={item} index={index} deleteQuote={deleteQuote} />
      })}
    </div>
  )
}

export default Quotes
