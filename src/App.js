import Counting from "./components/Counting" //"./components/Counting/index.js"
import Navbar from "./components/navbar"
import NumberGame from "./components/NumberGame"

// node -v
//JSX =>
//className not class
// In JSX => Inside {} we can use javascript code
//
function App() {
  return (
    <div>
      <Navbar />
      {/* <Counting /> */}
      <NumberGame />
    </div>
  )
}

export default App
// npx create-react-app appname
