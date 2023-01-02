const counterReducer = (state = 0, action) => {
  if (action.type === "INCREASE") {
    return state + 1
  } else if (action.type === "DECREASE") {
    return state - 1
  } else if (action.type === "RESET") {
    return 0
  } else if (action.type === "ADDTOCART") {
    return state + action.data
  } else {
    return state
  }
}

export default counterReducer
