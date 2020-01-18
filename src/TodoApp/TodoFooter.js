import React, { memo } from 'react';

const TodoFooter = () => {
  console.log('TodoFooter');
  return (
    <div>
      <button type="button">All Todos</button>
      <button type="button">Pending Todos</button>
      <button type="button">Completed Todos</button>
    </div>
  );
};

export default memo(TodoFooter);
