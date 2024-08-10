import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../store';
import { Link } from 'react-router-dom';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();

  const deleteBtnClick = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteBtnClick}>❌</button>
    </li>
  );
};

export default ToDo;
