import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, user, ...rest }) => {
  console.log('user', user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  console.log('private route', state);
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
