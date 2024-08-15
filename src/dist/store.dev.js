"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteToDo = exports.addToDo = void 0;

var _toolkit = require("@reduxjs/toolkit");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var defaultState = localStorage.getItem('toDos') ? JSON.parse(localStorage.getItem('toDos')) : [];

var shortid = function shortid() {
  return Date.now();
};

var toDos = (0, _toolkit.createSlice)({
  name: 'toDosReducer',
  initialState: defaultState,
  reducers: {
    addToDo: function addToDo(state, action) {
      var newItem = {
        text: action.payload,
        id: shortid()
      };
      localStorage.setItem('toDos', JSON.stringify([newItem].concat(_toConsumableArray(state))));
      state.unshift(newItem); // Redux Toolkit 에서는 state mutate 가능
    },
    deleteToDo: function deleteToDo(state, action) {
      var deleteItem = state.filter(function (toDo) {
        return toDo.id !== action.payload;
      });
      localStorage.setItem('toDos', JSON.stringify(deleteItem));
      return deleteItem;
    }
  }
});
var store = (0, _toolkit.configureStore)({
  reducer: toDos.reducer
}); // configureStore() 사용시, Redux Developer Tools를 사용할 수 있다

var _toDos$actions = toDos.actions,
    addToDo = _toDos$actions.addToDo,
    deleteToDo = _toDos$actions.deleteToDo;
exports.deleteToDo = deleteToDo;
exports.addToDo = addToDo;
var _default = store;
exports["default"] = _default;