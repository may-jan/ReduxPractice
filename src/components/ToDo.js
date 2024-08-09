import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../store';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();

  const deleteBtnClick = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      {text} <button onClick={deleteBtnClick}>❌</button>
    </li>
  );
};

export default ToDo;
