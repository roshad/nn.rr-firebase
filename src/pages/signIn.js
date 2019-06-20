import React from "react";

import { connect } from "react-redux";

class SignIn extends React.Component {
    state = { form: {} };
    handleChange = e => {
        this.setState({
            form: { ...this.state.form, [e.target.id]: e.target.value }
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.dispatch(this.state.form);
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

const creatorSignIn = credentials => (
    dispatch,
    getState,
    { getFirebase, getFirestore }
) => {
    const fireStore = getFirestore();
    fireStore
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
};

const dtP = dispatch=>({dispatch: credentials => dispatch(creatorSignIn(credentials))})
export default connect(
    null,
    dtP
)(SignIn);
