import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions/actionTypes';
let nextId = 0;
export const addTod = text => ({
  type: ADD_TODO,
  id: nextId++,
  text,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});
