import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

export const addToDo = createAction('ADD');
export const deleteToDo = createAction('DELETE');

const defaultState = localStorage.getItem('toDos')
  ? JSON.parse(localStorage.getItem('toDos'))
  : [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case addToDo.type:
      const addItem = [{ text: action.payload, id: Date.now() }, ...state];
      localStorage.setItem('toDos', JSON.stringify(addItem));
      return addItem;
    case deleteToDo.type:
      const deleteItem = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem('toDos', JSON.stringify(deleteItem));
      return deleteItem;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
