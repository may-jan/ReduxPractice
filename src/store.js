import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
    id: Date.now(),
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = JSON.parse(localStorage.getItem('toDos')), action) => {
  switch (action.type) {
    case ADD:
      const addItem = [{ text: action.text, id: action.id }, ...state];
      localStorage.setItem('toDos', JSON.stringify(addItem));
      return addItem;
    case DELETE:
      const deleteItem = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem('toDos', JSON.stringify(deleteItem));
      return deleteItem;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
