import { createStore, combineReducers } from 'redux';
import votersReducer from './reducers/votersReducer';

const rootReducer = combineReducers({
    voters: votersReducer
});

export default createStore(rootReducer);