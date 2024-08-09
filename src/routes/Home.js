import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../store';

const Home = ({ toDos, addToDo }) => {
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
    addToDo(text);
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

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
