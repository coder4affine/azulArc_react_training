import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ item, onChecked, onDelete }) => {
  console.log('TodoListItem');
  return (
    <div>
      <input type="checkbox" checked={item.isDone} onChange={() => onChecked(item)} />
      <span
        style={{
          textDecoration: item.isDone ? 'line-through' : 'none',
        }}
      >
        {item.text}
      </span>
      <button type="button" onClick={() => onDelete(item)}>
        Delete
      </button>
    </div>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  onChecked: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default memo(TodoListItem);
