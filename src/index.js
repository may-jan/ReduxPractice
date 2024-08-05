import { createStore } from 'redux';

// =====================================================
// =====================================================
// 1. redux 사용해보기
// =====================================================
// // reducer는 무조건 함수형태, data를 가공하는 곳
// // action : 메세지
// const reducer = (state = 0, action) => {
//   console.log(state, action);
//   if (action.type === 'ADD') {
//     return state + 1;
//   } else if (action.type === 'MINUS') {
//     return state - 1;
//   } else {
//     return state;
//   }
// };

// // data를 저장하는 곳
// const store = createStore(reducer);

// console.log(store.getState()); // 0

// // dispatch를 통해 reducer로 action(메세지, 객체형태)을 보냄
// store.dispatch({ type: 'ADD' });
// store.dispatch({ type: 'MINUS' });

// =====================================================
// =====================================================
// 2. count 변경해보기
// =====================================================
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

const ADD = 'ADD';
const MINUS = 'MINUS';

const countModify = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModify);

const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe : countStore에 변화가 있을 때마다 실행되는 함수
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
