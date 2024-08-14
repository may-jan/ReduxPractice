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
var defaultState = localStorage.getItem('toDos') ? JSON.parse(localStorage.getItem('toDos')) : [];

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case addToDo.type:
      var addItem = [{
        text: action.payload,
        id: Date.now()
      }].concat(_toConsumableArray(state));
      localStorage.setItem('toDos', JSON.stringify(addItem));
      return addItem;

    case deleteToDo.type:
      var deleteItem = state.filter(function (toDo) {
        return toDo.id !== action.payload;
      });
      localStorage.setItem('toDos', JSON.stringify(deleteItem));
      return deleteItem;

    default:
      return state;
  }
};

var store = (0, _redux.createStore)(reducer);
var _default = store;
exports["default"] = _default;