import axios from "axios";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FEILURE = 'LOGIN_FEILURE';

const SignInRequest = () => {
    return {
        type : LOGIN_REQUEST,
    }
}

const SignInSuccess = (payload) => {
    return {
        type : LOGIN_SUCCESS,
        payload
    }
}

const SignInFeilure = (payload) => {
    return {
        type : LOGIN_FEILURE,
        payload
    }
};

export const SignIn = (payload) => (dispatch) => {
    dispatch(SignInRequest());

    axios.post('/api/login', payload, {baseURL: 'https://reqres.in'})
    .then(r => dispatch(SignInSuccess(r.data)))
    .catch(e => dispatch(SignInFeilure(e.data)))
}