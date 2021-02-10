import React from 'react';
import { Route, Redirect } from "react-router-dom";
function ProtectedRoute({ component: Component, ...rest }) {

    var tokenObj = JSON.parse(localStorage.getItem('token'))


    return (<Route {...rest} render={(props) => {
        if (tokenObj) {
            return <Component />
        } else {
            return (<Redirect to={{ pathname: '/404', state: { from: props.location } }} />
            )
        }
    }}
    />)
}
export default ProtectedRoute