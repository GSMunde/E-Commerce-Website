import  axios  from 'axios';
import * as types from './actionType';

const fetchDataRequest = (payload) => {
    return {
        type : types.FETCH_DATA_REQUEST,
        payload
    }
};

const fetchDataSuccess = (payload) => {
    return {
        type : types.FETCH_DATA_SUCCESS,
        payload
    }
};

const fetchDataFailure = (payload) => {
    return {
        type : types.FETCH_DATA_FEILURE,
        payload
    }
};


export const fetchData = (payload) => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
    
    axios.get('/products', {
        params: {
            ...payload,
        },
        
    })
        .then((res) => dispatch(fetchDataSuccess(res.data)))
        .catch((err) => dispatch(fetchDataFailure(err.data))); 
    };
};




const getSingleProductRequest = (payload) => {
    return {
        type : types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
};

const getSingleProductSuccess = (payload) => {
    return {
        type : types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
};

const getSingleProductFeilure = (payload) => {
    return {
        type : types.GET_SINGLE_PRODUCT_FEILURE,
        payload
    }
};


export const getSingleProduct = (id) => (dispatch) => {
    dispatch(getSingleProductRequest());

    axios.get(`/products/${id}`)
    .then(res => dispatch(getSingleProductSuccess(res.data)))
    .catch(err => dispatch(getSingleProductFeilure(err.data)));
};


const addProductCartRequest = (payload) => {
    return {
        type : types.ADD_PRODUCT_CART_REQUEST,
        payload
    }
};

const addProductCartSuccess = (payload) => {
    return {
        type : types.ADD_PRODUCT_CART_SUCCESS,
        payload
    }
};

const addProductCartFeilure = (payload) => {
    return {
        type : types.ADD_PRODUCT_CART_FEILURE,
        payload
    }
};

export const AddProductCart = (product) => dispatch => {
    dispatch(addProductCartRequest());

    axios.post('/cart', product)
    .then(res => dispatch(addProductCartSuccess(res.data)))
    .catch(err => dispatch(addProductCartFeilure(err.data)))
};



const fetchCartRequest = (payload) => {
    return {
        type : types.FETCH_CART_REQUEST,
        payload
    }
};

const fetchCartSuccess = (payload) => {
    return {
        type : types.FETCH_CART_SUCCESS,
        payload
    }
};

const fetchCartFailure = (payload) => {
    return {
        type : types.FETCH_CART_FEILURE,
        payload
    }
};



export const AddFetchData = (product) => dispatch => {
    dispatch(fetchCartRequest());

    axios.get('/cart')
    .then(res => dispatch(fetchCartSuccess(res.data)))
    .catch(err => dispatch(fetchCartFailure(err.data)))
};


const removeProductCartRequest = (payload) => {
    return {
        type : types.REMOVE_PRODUCT_CART_REQUEST,
        payload
    }
};

const removeProductCartSuccess = (payload) => {
    return {
        type : types.REMOVE_PRODUCT_CART_SUCCESS,
        payload
    }
};

const removeProductCartFailure = (payload) => {
    return {
        type : types.REMOVE_PRODUCT_CART_FEILURE,
        payload
    }
};

export const deleteProductCart = (id) => dispatch => {
    dispatch(removeProductCartRequest());

    axios.delete(`/cart/${id}`)
    .then(res => dispatch(removeProductCartSuccess(res.data)))
    .then(() => dispatch(AddFetchData()))
    .catch(err => dispatch(removeProductCartFailure(err.data)))
};


const addOrderRequest = () => {
    return {
        type : types.ADD_ORDER_REQUEST,
    }
};

const addOrderSuccess = (payload) => {
    return {
        type : types.ADD_ORDER_SUCCESS,
        payload
    }
};

const addOrderFeilure = (payload) => {
    return {
        type : types.ADD_ORDER_FEILURE,
        payload
    }
};

export const AddOrder = (payload) => (dispatch) => {
    dispatch(addOrderRequest());

    const orderPayload = [];

    for(let product of payload){
        product && orderPayload.push(axios.post("/orders", product));

    }

    Promise.all(orderPayload)
    .then((res) =>  dispatch(addOrderSuccess()))
    .then(() => dispatch(emptyCart(payload)))
    .catch(() => dispatch(addOrderFeilure()))
}

export const emptyCartRequest = () => {
    return {
        type: types.EMPTY_CART_REQUEST
    }
}

export const emptyCartSuccess = () => {
    return {
        type: types.EMPTY_CART_SUCCESS
    }
}

export const emptyCartFeilure = () => {
    return {
        type: types.EMPTY_CART_FEILURE
    }
}

export const emptyCart = (payload) => (dispatch) => {
    dispatch(emptyCartRequest());

    const deleteOrders = [];

    for(let obj of payload){
        let temp = dispatch(deleteProductCart(obj.id));
        deleteOrders.push(temp);
    }

    Promise.all(deleteOrders)
    .then(r => dispatch(emptyCartSuccess()))
    .catch(e => dispatch(emptyCartFeilure()));
};



const fetchOrderRequest = (payload) => {
    return {
        type : types.FETCH_ORDER_REQUEST,
        payload
    }
};

const fetchOrderSuccess = (payload) => {
    return {
        type : types.FETCH_ORDER_SUCCESS,
        payload
    }
};

const fetchOrderFailure = (payload) => {
    return {
        type : types.FETCH_ORDER_FEILURE,
        payload
    }
};



export const FetchOrderData = (product) => dispatch => {
    dispatch(fetchOrderRequest());

    axios.get('/orders')
    .then(res => dispatch(fetchOrderSuccess(res.data)))
    .catch(err => dispatch(fetchOrderFailure(err.data)))
};
