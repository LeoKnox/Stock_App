import {
    GET_ALL_STOCKS_REQUEST,
    GET_ALL_STOCKS_SUCCESS,
    GET_ALL_STOCKS_ERROR
} from '../actions/stockActions';

const INITIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    data: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_ALL_STOCKS_REQUEST:
            return{
                ...state,
                loading: true
            };
        case GET_ALL_STOCKS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_ALL_STOCKS_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            };

        default:
            return state;
    }
}