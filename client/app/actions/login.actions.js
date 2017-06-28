import { AUTH } from '../constants';

function login(user){
    return {
        type: AUTH.LOGIN,
        payload: user
    }
}

function logout(user){
    return {
        type: AUTH.LOGOUT,
        payload: user
    };
}

export default { login, logout };