import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToDo } from '../store';

const Home = () => {
  const [text, setText] = useState('');

  const todo = useSelector((state) => state);
  // useSelector : Redux store state의 데이터를 바로 가져올 수 있다
  const dispatch = useDispatch();
  // useDispatch : mapStateToProps 대체

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText('');
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Home;
