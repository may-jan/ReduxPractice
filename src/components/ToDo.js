import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../store';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();

  const deleteBtnClick = (e) => {
    const id = parseInt(e.target.parentNode.id);
    dispatch(deleteToDo(id));
  };

  return (
    <li id={id}>
      {text} <button onClick={deleteBtnClick}>❌</button>
    </li>
  );
};

export default ToDo;
