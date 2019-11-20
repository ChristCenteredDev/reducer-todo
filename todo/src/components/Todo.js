import React from 'react';

const Todo = props => {
  return (
    <div
      className={`todo${props.data.completed ? ' complete' : ''}`}
      onClick={props.toggle}
    >
      <p>{props.data.item}</p>
    </div>
  );
};

export default Todo;
