import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";


const  ProtectedRoute = ({ isSignin, component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isSignin
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)
const mapStateToProps = (state) => ({
    isSignin: state.signinReducer.isSignin
  })

export default connect(mapStateToProps)(ProtectedRoute);