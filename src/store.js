import { configureStore, createSlice } from '@reduxjs/toolkit';

const defaultState = localStorage.getItem('toDos')
  ? JSON.parse(localStorage.getItem('toDos'))
  : [];

const shortid = () => {
  return Date.now();
};

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: defaultState,
  reducers: {
    addToDo: (state, action) => {
      const newItem = { text: action.payload, id: shortid() };
      localStorage.setItem('toDos', JSON.stringify([newItem, ...state]));
      state.unshift(newItem); // Redux Toolkit 에서는 state mutate 가능
    },
    deleteToDo: (state, action) => {
      const deleteItem = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem('toDos', JSON.stringify(deleteItem));
      return deleteItem;
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });
// configureStore() 사용시, Redux Developer Tools를 사용할 수 있다

export const { addToDo, deleteToDo } = toDos.actions;

export default store;
