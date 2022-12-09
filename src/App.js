import Counting from "./components/Counting" //"./components/Counting/index.js"
import Navbar from "./components/navbar"
import Nest from "./components/Nest"
import NumberGame from "./components/NumberGame"
import PasswordValidator from "./components/PasswordValidator"
import Quotes from "./components/Quotes"

// node -v
//JSX =>
//className not class
// In JSX => Inside {} we can use javascript code
//
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Counting /> */}
      {/* <NumberGame /> */}
      {/* <Quotes /> */}
      {/* <Nest /> */}
      <PasswordValidator />
    </div>
  )
}

export default App
// npx create-react-app appname
