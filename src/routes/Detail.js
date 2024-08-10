import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteToDo } from '../store';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  const deleteBtnClick = () => {
    dispatch(deleteToDo(parseInt(id)));
    navigate('/');
  };

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
      <button onClick={deleteBtnClick}>❌</button>
    </>
  );
};

export default Detail;
