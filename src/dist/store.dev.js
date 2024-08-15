"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteToDo = exports.addToDo = void 0;

var _redux = require("redux");

var _toolkit = require("@reduxjs/toolkit");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var addToDo = (0, _toolkit.createAction)('ADD');
exports.addToDo = addToDo;
var deleteToDo = (0, _toolkit.createAction)('DELETE');
exports.deleteToDo = deleteToDo;
var defaultState = localStorage.getItem('toDos') ? JSON.parse(localStorage.getItem('toDos')) : []; // const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case addToDo.type:
//       const addItem = [{ text: action.payload, id: Date.now() }, ...state];
//       localStorage.setItem('toDos', JSON.stringify(addItem));
//       return addItem;
//     case deleteToDo.type:
//       const deleteItem = state.filter((toDo) => toDo.id !== action.payload);
//       localStorage.setItem('toDos', JSON.stringify(deleteItem));
//       return deleteItem;
//     default:
//       return state;
//   }
// };

var shortid = function shortid() {
  return Date.now();
};

var reducer = (0, _toolkit.createReducer)(defaultState, function (builder) {
  builder.addCase(addToDo, function (state, action) {
    var newItem = {
      text: action.payload,
      id: shortid()
    };
    localStorage.setItem('toDos', JSON.stringify([newItem].concat(_toConsumableArray(state))));
    state.unshift(newItem); // Redux Toolkit 에서는 state mutate 가능
  }).addCase(deleteToDo, function (state, action) {
    var deleteItem = state.filter(function (toDo) {
      return toDo.id !== action.payload;
    });
    localStorage.setItem('toDos', JSON.stringify(deleteItem));
    return deleteItem;
  });
});
var store = (0, _toolkit.configureStore)({
  reducer: reducer
}); // configureStore() 사용시, Redux Developer Tools를 사용할 수 있다

var _default = store;
exports["default"] = _default;