import { LOGIN, SETTOKEN, SETUSER, SETPASSWORD, SHOWERROR } from '../constants'
import { browserHistory } from 'react-router';
import httpService from '../abstractions/httpservice';
var httpProvider = new httpService();

export const SetUser = username => {
  return {
    type: SETUSER,
    username: username
  }
}

export const SetPassword = password => {
  return {
    type: SETPASSWORD,
    password: password
  }
}

export const Login = data => {
  return {
    type: LOGIN,
    username: data.username,
    password: data.password
  }
}

export const SetToken = token => {
  return {
    type: SETTOKEN,
    token: token
  }
}

export const ShowError = errorMessage => {
  return {
    type: SHOWERROR,
    message: errorMessage
  }
}

export function AuthenticateToServer(data) {
  return function(dispatch) {
    return httpProvider.post('http://localhost:3000/api/public/account/login', {
      username: data.username,
      password: data.password
    })
    .then(json => 
      {
        if(json.token) {
          dispatch(
            SetToken(json.token)
          );

          browserHistory.push('/jsonviewer');
        }
        else if(json.message) {
          dispatch(
            ShowError(json.message)
          );
        }
        else {
          throw 'No json token or json error message returned';
        }
      }
    )
  }
}

export function AddAccountToServer(data) {
  return function(dispatch) {
    return httpProvider.post('http://localhost:3000/api/public/account/add', {
      name: data.username,
      username: data.username,
      password: data.password
    })
    .then(response => 
      response.json(),
      error => console.log('an error occured')
    )
    .then(json => 
      {
        if(json.token) {
          dispatch(
            SetToken(json.token)
          );

          browserHistory.push('/jsonviewer');
        }
        else if(json.error) {
          dispatch(
            ShowError(json.error)
          );
        }
        else {
          throw 'No json token or json error message returned';
        }
      }
    )
  }
}