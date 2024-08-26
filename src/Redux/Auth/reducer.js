import * as types from './action';

const initState = {
    auth : false,
    token : '',
    isError : false
}

export const authReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case types.LOGIN_REQUEST:
            return {
                auth : false,
                token : '',
                isError : false
            }

        case types.LOGIN_SUCCESS:
            return {
                auth : true,
                token: payload,
                isError : false
            }

        case types.LOGIN_FEILURE:
            return {
                auth : false,
                isError : payload
            }

        default : 
            return state;
    }

}