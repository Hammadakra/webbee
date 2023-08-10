import { combineReducers } from 'redux';
import categoryReducer from './CategorySlice';

const rootReducer = combineReducers({
  category: categoryReducer,
});

export default rootReducer;