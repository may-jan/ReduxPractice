import { createStore } from 'redux';

// reducer는 무조건 함수형태, data를 가공하는 곳
const reducer = (state = 0) => {
  return state;
};

// data를 저장하는 곳
const store = createStore(reducer);

console.log(store.getState()); // 0
