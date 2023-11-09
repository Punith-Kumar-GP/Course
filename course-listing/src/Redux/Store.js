import { createStore, combineReducers, applyMiddleware } from 'redux';
import courseReducer from './Reducers/corseReducer';
import thunk from 'redux-thunk'; 

const rootReducer = combineReducers({
  courses: courseReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); 
export default store;
