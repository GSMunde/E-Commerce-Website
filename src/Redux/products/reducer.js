import * as types from './actionType';

const initState = {
    products: [],
    currentProduct : {},
    cart : [],
    orders : [],
    isError : false,
    isLoading : false
};

export const reducer = (state = initState, {type, payload}) => {
    switch(type){
        case types.FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading : true
            }

        
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading : false,
                products : payload
        }

        
        case types.FETCH_DATA_FEILURE:
            return {
                ...state,
                isLoading : false,
                isError : payload
        }

        case types.GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading : true
            }

        
        case types.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading : false,
                currentProduct : payload
        }

        
        case types.GET_SINGLE_PRODUCT_FEILURE:
            return {
                ...state,
                isLoading : false,
                isError : payload
        }
        

        
        case types.ADD_PRODUCT_CART_REQUEST:
            return {
                ...state,
                isLoading : true
            }

        
        case types.ADD_PRODUCT_CART_SUCCESS:
            return {
                ...state,
                isLoading : false,
                cart : [...state.cart, payload]
        }

        
        case types.ADD_PRODUCT_CART_FEILURE:
            return {
                ...state,
                isLoading : false,
                isError : payload
        }
        

        
        case types.FETCH_CART_REQUEST:
            return {
                ...state,
                isLoading : true
            }

        
        case types.FETCH_CART_SUCCESS:
            return {
                ...state,
                isLoading : false,
                cart : [...payload]
        }

        
        case types.FETCH_CART_FEILURE:
            return {
                ...state,
                isLoading : false,
                isError : payload
        }

        
        case types.REMOVE_PRODUCT_CART_REQUEST:
            return {
                ...state,
                isLoading : true
            }

        
        case types.REMOVE_PRODUCT_CART_FEILURE:
            return {
                ...state,
                isLoading : false,
                isError : payload
            }
    

        
        case types.FETCH_ORDER_REQUEST:
            return {
                ...state,
                isLoading : true
            }
    
            
        case types.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                isLoading : false,
                orders : [...payload]
            }
    
            
        case types.FETCH_ORDER_FEILURE:
            return {
                ...state,
                isLoading : false,
                isError : payload
        }
    
        default :
            return state;
    }
}