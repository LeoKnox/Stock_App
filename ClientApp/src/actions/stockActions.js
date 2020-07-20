import axios from 'axios';

export const GET_ALL_STOCKS_REQUEST = 'GET_ALL_STOCKS_REQUEST';
export const GET_ALL_STOCKS_SUCCESS = 'GET_ALL_STOCKS_SUCCESS';
export const GET_ALL_STOCKS_ERROR = 'GET_ALL_STOCKS_ERROR';

const getStocksSuccess = payload => ({
    type: GET_ALL_STOCKS_SUCCESS,
    payload
});

const getStocksError = payload => ({
    type: GET_ALL_STOCKS_ERROR,
    payload
});

export const getAllStocks = () => dispatch => {
    dispatch({type: GET_ALL_STOCKS_REQUEST});
    return axios.get('api/Stocks/GetStocks').then(res => {
        const response = res.data;
        dispatch(getStocksSuccess(response));
    }).catch(error => {
        dispatch(getStocksError("Something went wrong!"));
        return Promise.reject({});
    })
}