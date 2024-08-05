import { createStore } from 'redux';

// reducer는 무조건 함수형태, data를 가공하는 곳
// action : 메세지
const reducer = (state = 0, action) => {
  console.log(state, action);
  if (action.type === 'ADD') {
    return state + 1;
  } else if (action.type === 'MINUS') {
    return state - 1;
  } else {
    return state;
  }
};

// data를 저장하는 곳
const store = createStore(reducer);

console.log(store.getState()); // 0

// dispatch를 통해 reducer로 action(메세지, 객체형태)을 보냄
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'MINUS' });
