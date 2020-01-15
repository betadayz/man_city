import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import Routes from '../../routes';

const PublicRoute = ({
    user,
    component: Comp,
    ...rest
}) => <Route {...rest} component={(props) => (
        rest.restricted ?
            (user ?
                <Redirect to="/dashboard" />
                :
                <Comp {...props} user={user} />

            )
            :
        <Comp {...props} user={user} />
)} />;

export default PublicRoute;