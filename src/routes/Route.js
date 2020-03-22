import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    // Use Redux and handle this signed variable for navigation
    const signed = false;

    // Route is private and the user is not signed in
    if (isPrivate && !signed) {
        return <Redirect to="/" />
    }

    // Route is not private and user is loged in
    if (!isPrivate && signed) {
        return <Redirect to="/dashboard" />
    }
    return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false
}