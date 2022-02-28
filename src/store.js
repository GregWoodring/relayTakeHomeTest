import { createStore, combineReducers } from 'redux';
import votersReducer from './reducers/votersReducer';

const rootReducer = combineReducers({
    voter: votersReducer
});

export default createStore(rootReducer);