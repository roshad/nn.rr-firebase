import React from "react";

import { compose } from "redux";

import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";

class SignIn extends React.Component {
    state = { credentials: {} };
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.id]: e.target.value
            }
        });
    };
    handleSubmit = e => {
        e.preventDefault();

        this.props.firebase
            .login(this.state.credentials)
            

        console.log(this.props.storeState);
    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label>email</label>
                        <input
                            id="email"
                            type="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label>password</label>
                        <input
                            id="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="waves-effect waves-light btn">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

const stP = state => ({ storeState: state });

export default compose(
    withFirebase,
    connect(
        stP,
        null
    )
)(SignIn);
