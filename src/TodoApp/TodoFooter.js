import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoFooter = ({ switchList }) => {
  console.log('TodoFooter');
  return (
    <div>
      <button type="button" onClick={() => switchList('all')}>
        All Todos
      </button>
      <button type="button" onClick={() => switchList('pending')}>
        Pending Todos
      </button>
      <button type="button" onClick={() => switchList('completed')}>
        Completed Todos
      </button>
    </div>
  );
};

TodoFooter.propTypes = {
  switchList: PropTypes.func.isRequired,
};

export default memo(TodoFooter);
