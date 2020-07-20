import {combineReducers} from 'redux';
import stockReducers from './stockReducers';

const rootReducer = combineReducers({
    stocks: stockReducers
});

export default rootReducer;