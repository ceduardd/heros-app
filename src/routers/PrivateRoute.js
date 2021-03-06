import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  localStorage.setItem('lastPath', rest.location.pathname);

  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
