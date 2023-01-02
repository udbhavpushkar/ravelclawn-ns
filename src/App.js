import Adnaan from "./components/Adnaan"
import Control from "./components/Control"
import Counting from "./components/Counting" //"./components/Counting/index.js"
import Forms from "./components/Forms"
import Girish from "./components/Girish"
import Navbar from "./components/navbar"
import Nest from "./components/Nest"
import NumberGame from "./components/NumberGame"
import PasswordValidator from "./components/PasswordValidator"
import Prashant from "./components/Prashant"
import Quotes from "./components/Quotes"
import Raghu from "./components/Raghu"
import Timer from "./components/Timer"

import "./App.css"
import Twitter from "./components/Twitter"
import Nav from "./components/Nav"
import MainPage from "./components/MainPage"
import { Provider } from "react"
import Footer from "./components/Footer"

// node -v
//JSX =>
//className not class
// In JSX => Inside {} we can use javascript code
//
function App() {
  return (
    <div>
      <Nav />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App
// npx create-react-app appname
