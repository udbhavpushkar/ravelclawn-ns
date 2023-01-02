import React from "react"
class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "Udbhav", age: 24 }
  }

  increaseAge = () => {
    this.setState({ ...this.state, age: this.state.age + 1 })
  }

  render() {
    return <h2 onClick={this.increaseAge}>This is footer {this.state.age}</h2>
  }
}

export default Footer
