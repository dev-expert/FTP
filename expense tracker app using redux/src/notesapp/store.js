import {createStore} from 'redux';
import notesReducer from './notesapp';

const store = createStore(notesReducer);

export default store;
