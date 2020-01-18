// class component

// function component

import React from 'react';
import PropTypes from 'prop-types';

import './main.css';

const containerStyle = `container label`;

const Main = ({ text, caption, applyStyle }) => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: applyStyle ? 'yellow' : 'green',
        }}
        className={containerStyle}
      >
        Hello World
      </h1>
      <h1>{text}</h1>
      <h4>{caption}</h4>
      <input type="password" />
    </div>
  );
};

Main.propTypes = {
  text: PropTypes.string.isRequired,
  caption: PropTypes.number.isRequired,
  applyStyle: PropTypes.bool.isRequired,
};

export default Main;
