import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ isEmpty, ...rest }) => {
    return isEmpty ? <Redirect to="/in" /> : <Route {...rest} />;
};

const mapStateToProps = state => ({
    isEmpty: state.firebase.auth.isEmpty
});

export default connect(mapStateToProps)(PrivateRoute);
