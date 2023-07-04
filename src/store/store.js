import { createStore } from 'redux';
import myDataReducer from './pushDataSlice';

const store = createStore(myDataReducer);

export default store;