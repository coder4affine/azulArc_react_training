import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class test extends PureComponent {
  render() {
    const { user } = this.props;
    return <div>{user.name}</div>;
  }
}

test.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default test;
