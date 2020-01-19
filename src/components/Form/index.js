/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import Button from '@material-ui/core/Button';

const index = ({ fields, ...props }) => {
  return (
    <Formik {...props} initialValues={fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {})}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              {fields.map(x => (
                <Field key={x.name} {...x} />
              ))}

              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

index.propTypes = {
  fields: PropTypes.array.isRequired,
};

export default index;
