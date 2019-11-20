import React, { useState, useReducer } from 'react';
import { initialState, reduceTodo } from '../reducers/reducers.js';
import Todo from './Todo.js';

const TodoList = () => {
  const [state, dispatch] = useReducer(reduceTodo, initialState);
  return (
    <>
      <div className='form'>
        <form>
          <label htmlFor='item'>Add New Item:</label>
          <input type='text' name='item' placeholder='What needs done?' />
          <button>Submit</button>
        </form>
      </div>
      <div className='todoList'>
        {state.map(cv => {
          return <Todo data={cv} key={cv.id} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
