import { AUTH } from '../constants';

const initialState = [];

export function LoginReducer(state = initialState, action) {
    switch(action.type) {
        case AUTH.LOGIN:
            return [...state, action.payload];
        case AUTH.LOGOUT:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}