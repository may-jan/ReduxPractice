"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteToDo = exports.addToDo = void 0;

var _redux = require("redux");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ADD = 'ADD';
var DELETE = 'DELETE';

var addToDo = function addToDo(text) {
  return {
    type: ADD,
    text: text,
    id: Date.now()
  };
};

exports.addToDo = addToDo;

var deleteToDo = function deleteToDo(id) {
  return {
    type: DELETE,
    id: id
  };
};

exports.deleteToDo = deleteToDo;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD:
      return [{
        text: action.text,
        id: Date.now()
      }].concat(_toConsumableArray(state));

    case DELETE:
      return state.filter(function (toDo) {
        return toDo.id !== action.id;
      });

    default:
      return state;
  }
};

var store = (0, _redux.createStore)(reducer); // store.subscribe();

var _default = store;
exports["default"] = _default;