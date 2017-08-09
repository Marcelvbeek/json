import { LOGIN, SETTOKEN, SETUSER, SETPASSWORD, SHOWERROR } from '../constants'

const initialState = {
  errorMessage: "",
  username: "Pietjepuk",
  password: "blabla",
  token: "112"
}

export default function authentication(state = initialState, action) {
  switch(action.type) {
    case LOGIN: 
      return Object.assign({}, state, {
        username: action.username,
        password: action.password
      })
    case SETTOKEN:
      return Object.assign({}, state, {
        token: action.token
      })
    case SETUSER:
      return Object.assign({}, state, {
        username: action.username
      })
    case SETPASSWORD:
      return Object.assign({}, state, {
        password: action.password
      })
    case SHOWERROR:
      return Object.assign({}, state, {
        errorMessage: action.message
      })
    default:
      return state
  }
}