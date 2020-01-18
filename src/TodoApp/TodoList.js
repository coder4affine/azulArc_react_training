import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onChecked, onDelete }) => {
  console.log('TodoList');
  return (
    <div>
      <h1>Your todo will display here...</h1>
      {todoList.map(x => (
        <TodoListItem key={x.id} item={x} onChecked={onChecked} onDelete={onDelete} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onChecked: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
