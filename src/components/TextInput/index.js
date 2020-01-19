import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { getIn } from 'formik';

const index = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const error = getIn(errors, field.name);
  const touch = getIn(touched, field.name);
  const errorMsg = touch && error ? error : null;
  return (
    <TextField {...props} {...field} variant="outlined" error={!!errorMsg} helperText={errorMsg} />
  );
};

index.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    errors: PropTypes.array.isRequired,
  }).isRequired,
};

export default index;
