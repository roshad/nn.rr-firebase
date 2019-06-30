import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { compose } from "redux";
import { withFirebase } from "react-redux-firebase";

class Navbar extends React.Component {
    render() {
        const { isLoaded, isEmpty } = this.props.auth;
        return (
            <nav className="blue">
                <div class="navbar-wrapper ">
                    <div class="container">
                        <Link to="" class="brand-logo">
                            PMS
                        </Link>

                        {!isLoaded ? (
                            <Loading/>
                        ) : isEmpty ? (
                            <Out />
                        ) : (
                            <In firebase={this.props.firebase} />
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}

function In(props) {
    return (
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
                <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/newProject">New Project</Link>
            </li>

            <li>
                <Link onClick={() => props.firebase.logout()}>Log Out</Link>
            </li>
            <li>
                <Link className="btn-floating">Avatar</Link>
            </li>
        </ul>
    );
}

function Out(props) {
    return (
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
                <Link to="/in">Log In</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
    );
}

function Loading(props) {
    return (
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
                <div >Loading</div>
            </li>
        </ul>
    );
}

const stp = ({ firebase: { auth } }) => ({ auth });

export default compose(
    withFirebase,
    connect(
        stp,
        null
    )
)(Navbar);
