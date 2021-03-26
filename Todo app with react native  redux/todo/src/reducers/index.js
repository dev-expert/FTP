//for combining different reducers we use combineReducers
import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

//mention your all reducers here to combine them
export default combineReducers({
  todos,
  visibilityFilter,
});
