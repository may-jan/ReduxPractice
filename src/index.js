import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      console.log(action.text);
      return [];
    case DELETE_TODO:
      console.log('delete');
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener('submit', onSubmit);
